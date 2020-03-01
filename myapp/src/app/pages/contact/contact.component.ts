import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

function validateAge(ac:AbstractControl)
{
  if(isNaN(ac.value) || (ac.value<18 || ac.value>50))
  {
    return {'myEr':true  };
}
return null;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
myForm:FormGroup
constructor(private fb: FormBuilder){ }
ngOnInit(){
  this.validate()
}


postData()
{
  alert("hiii")
  /* let mn= this.myForm.controls.mn.value; */
  let fData = this.myForm.getRawValue();
  console.log(fData);
}


validate()
{
  this.myForm= this.fb.group(
    {
      'name':['',[Validators.required, Validators.pattern("[a-zA-Z]+")]],
      'mn':['',[Validators.pattern("[6-9][0-9]{9}")]],
      'age':['',validateAge]
    }
  )
  }
}








