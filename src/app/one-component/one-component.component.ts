import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {

  constructor(private newService: MyDataService) { }

  ngOnInit() {
    console.log(this.newService.obj.name)
  }

}
