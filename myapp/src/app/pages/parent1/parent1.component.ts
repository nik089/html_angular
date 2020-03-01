import { Component, OnInit,ViewChild } from '@angular/core';
import {Child1Component} from '../child1/child1.component';
@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  @ViewChild(Child1Component,{static:false}) child:Child1Component;
  count=0;
  constructor() { }
  abc()
  {
    this.count++;
  }
  ngOnInit() {
    this.child.myevent();
  }

}
