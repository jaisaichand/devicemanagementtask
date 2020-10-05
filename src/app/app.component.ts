import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardevice';
  datatomain;
  deviceslist = [];
  constructor(private service: DataserviceService) {}
  username = this.service.username.name;
  loggedIn = false;
  enteredName = '';
login() {
this.loggedIn = true;
this.service.username.name = this.enteredName;
this.username = this.enteredName;
}


clickedd(eve) {
  console.log(eve);
  this.datatomain = this.service.devicesList[eve];
  console.log(this.service.devicesList[eve]);
}

changeTo(eve) {console.log(eve);
  this.service.devicesList[eve.data.index].status = eve.changeState;
  this.deviceslist = this.service.devicesList;
}
}
