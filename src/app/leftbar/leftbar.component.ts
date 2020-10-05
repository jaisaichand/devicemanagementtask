import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  deviceslist = this.dataService.devicesList;
  @Output() clickeddata = new EventEmitter();
  // tslint:disable-next-line: no-input-rename
  @Input('deviceslist') deviceslistt: any;
  ngOnInit() {

  }
  openToRight(ind) {
    this.clickeddata.emit(ind);
  }

}
