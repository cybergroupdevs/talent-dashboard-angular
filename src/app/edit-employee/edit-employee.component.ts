import { Component, OnInit  } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  isLinear: boolean = false;
  skills : any[]; 
  employeeId : string ;
  employee : any ; 
  genderType = [ {
    id:"F" , name:"Female"
  },
  {
    id:"F" , name:"Male"
  }];

  
  
  constructor(private service : HttpService,
              private route : ActivatedRoute, 
              private router : Router ) { }

  ngOnInit() {    
    this.route.params
      .subscribe(param =>{
        this.getCurrentEmployeeDetail();
      });

      this.getSkills();
  }

  getSkills(){

    this.service.getSkills()
      .subscribe(
        response => {
          if(response.status == true && response.mesage == "Skill list returned")
          {
            this.skills =  response.data;
            console.log("Detail page employee :" + this.skills);  
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
  
        updateEmployee(f){
          // call service with f.value
            // this.router.navigate(['/details' ,this.employeeId]);
            console.log('Updating employee');
        }
  
}