import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  username = {name: ''};

  devicesList = [{name: 'Samsung Note 10+', status: 'Online', index: 0}, {name: 'Surface Duo', status: 'Offline', index: 1},
  {name: 'Echo Dot', status: 'Online', index: 2}, {name: 'MI Tv', status: 'Offline', index: 3}];

}
