import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  canActivate()
  {
    let uname="Nitesh";
    if(uname==="Nitesh")
    {
      return true;
    }
    else
    {
      alert("You are not authorise");
      return false;
    }
  }


}
