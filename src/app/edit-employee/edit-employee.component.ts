import { Component, OnInit  } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';


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
  skillTest = new FormControl();
  genderType = [ {
    id:"F" , name:"Female"
  },
  {
    id:"M" , name:"Male"
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
      console.log("skills" + this.skills);
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
  
  navigateToUserDetailPage(){
    this.router.navigate(['/details' ,this.employeeId]);
  }


  updateEmployee(f){
    debugger
    let editContent = {
      "userId" : this.employeeId , 
      "firstName": f.value.firstName,
      "middleName": f.value.middleName,
      "lastName": f.value.lastName,
      "mobileNumber": f.value.mobileNumber,
      "dateOfBirth": f.value.dateOfBirth,
      "gender": f.value.gender,
      "address": f.value.address,
      "city": f.value.city,
      "country": f.value.country,
      "state": f.value.state,
      "zipCode": f.value.zipCode,
      "bio": f.value.bio,
      "skills": f.value.skills,
      "emailAddress": f.value.emailAddress,
      "location": f.value.location
    }

    this.service.updateEmployee(editContent)
    .subscribe(
      response => {
        if(response.status == true)
        {
          console.log("Updated successfully");  
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
    this.router.navigate(['/details' ,this.employeeId]);
            console.log('Updating employee');
        }
  
}