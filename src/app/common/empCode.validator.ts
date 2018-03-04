import { AbstractControl  , ValidationErrors} from "@angular/forms";

export class EmpCodeValidator{

    static shouldBeUnique(control : AbstractControl) : Promise <ValidationErrors | null> {
            return new Promise((resolve , reject )=>{
                setTimeout(()=>{
                    if(control.value == "CGI-1")
                        resolve({shouldBeUnique : true });
                    else 
                        resolve(null);
                }, 2000);
            })
    }
}