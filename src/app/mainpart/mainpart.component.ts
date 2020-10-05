import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.css']
})
export class MainpartComponent implements OnInit, OnChanges {

  constructor() { }
  dataclicked;
  displaydata = null;
  // tslint:disable-next-line: no-input-rename
  @Input('datatomain') datatomain: any;

  @Output() changeTrigger = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.datatomain.currentValue != undefined) {
      this.displaydata = changes.datatomain.currentValue;
    }
  }

  changeStat(op) {
    this.changeTrigger.emit({data: this.displaydata, changeState: op});
  }

}
