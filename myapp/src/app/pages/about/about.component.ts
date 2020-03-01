import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  resData;
  newsData;
  constructor(private http:HttpClient) { }
  ngOnInit() {
    const url="https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-20&sortBy=publishedAt&apiKey=db968a2e27f741f5acd9dd12fc34620c";
    this.http.get(url)
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.status=="ok")
        {
          this.newsData=this.resData.articles;
          console.log(this.newsData)
        }
      },err=>
      {
        console.log(err);
      })
  }

}
