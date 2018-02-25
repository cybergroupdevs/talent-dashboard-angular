import { Component, OnInit , Input} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import {DatePipe} from '@angular/common';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employeeId : string ; 
  employee : any ; 
  constructor(private route : ActivatedRoute , 
              private service : HttpService,
              private authService : AuthService , 
              private router : Router ) {  }

  ngOnInit() {
      this.route.params
      .subscribe(param =>{
        this.getCurrentEmployeeDetail();
      });
}

getCurrentEmployeeDetail(){
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.service.getEmployeeDetails(this.employeeId)
      .subscribe(
        response => {
          if(response.status == true)
          {
            this.employee =  response.data;
            if(this.employee.gender == 'M')
              this.employee.gender = "Male"
            else
            this.employee.gender = "Female"
            console.log("Detail page employee :" + this.employee);  
          }
        },
        (error : Response) => {
          if(error.status === 400){}
          else{
            alert("Something unexpected occured");
            console.log(error);
          }
          
        });
}

  deleteEmployee(){
    if( confirm("Are you sure you want to delete this employee?")) {
      this.service.deleleEmployee(this.employeeId)
      .subscribe(
        response => {
          if(response.status == true)
          {
            console.log("deleted successfully");  
          }
          else{
            console.log(response.mesage);
            alert(response.mesage);
          }
          this.router.navigate(['/userlist']);
        },
        (error : Response) => {
          if(error.status === 400){}
          else{
            alert("Something unexpected occured");
            console.log(error);
          }
          
        });
      
    } 
      
  }

}
