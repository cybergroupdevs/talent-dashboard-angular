import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employeeId : string ; 
  employee : any ; 
  constructor(private route : ActivatedRoute , 
              private service : HttpService) {  }

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
 



}
