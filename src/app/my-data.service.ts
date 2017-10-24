import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

  obj = {
    id: "1",
    name: "Jacobo",
    rollnumber: "14234"
  }

  success () {
    return 'Successful';
  }
}
