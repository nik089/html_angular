import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserId: string;
  category=["mens","womens","kids"];
  constructor(private router:Router) { }
  logout()
  {
    localStorage.removeItem('Uid');
    this.router.navigate(["/"]);
  }


  ngOnInit() {

  this.UserId=localStorage.getItem('Uid');
  }

}
