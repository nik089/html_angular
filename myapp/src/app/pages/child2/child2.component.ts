import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() myevent=new EventEmitter();
  count=0;
  constructor() { }
  abc()
  {
    this.count++;
    this.myevent.emit(this.count);
  }
  ngOnInit() {
  }

}
