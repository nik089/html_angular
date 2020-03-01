import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup

  Username;
  pass;
  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.validate()
  }
  postData()
  {
    let fdata=this.myForm.getRawValue();
    if (fdata.Username=="admin@gmail.com" && fdata.pass=="admin123")
    {

      localStorage.setItem('Uid',fdata.Username);
      alert("Login Sucessfull");
      this.router.navigate(['/dashboard']);

    }
    else
    {
      alert("Enter Valid Username or Password");
    }



  }


  validate()
  {


    this.myForm=this.fb.group(
      {
        'Username':['',[Validators.required, Validators.pattern("[a-zA-Z0-9_.@]+")]],
        'pass':['',[Validators.required,]],

      }
    )
  }
}
