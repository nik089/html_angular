import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  cname;
  constructor(private ar:ActivatedRoute) { }
  ngOnInit() {
    this.ar.params.subscribe(par=>
    {
      this.cname=par.cn;
    });
  }

}
