import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  proData;
  constructor(private myss:MyserviceService) { }

  ngOnInit() {
    this.myss.getData("assets/product.json")
    .subscribe(res=>
      {
        console.log(res)
        this.resData=res;
        this.proData=this.resData;
      })
  }

  abc()
  {
    localStorage.setItem('sid',"Nitesh");
    alert("data saved in local Storage");
  }

}
