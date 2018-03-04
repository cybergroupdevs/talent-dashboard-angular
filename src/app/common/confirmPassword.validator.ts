import {AbstractControl , ValidationErrors } from '@angular/forms'

export class ConfirmPasswordValidators{

 static sameAsPassword(control : AbstractControl) : ValidationErrors | null{
    
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');

        if(confirmPassword.value != password.value)
        {
            console.log("Did not match");
            control.get('confirmPassword').setErrors({ MatchPassword : true });
            return { sameAsPassword : true }; 
        }
        return null ; 
    }

}