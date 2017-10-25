import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newService: MyDataService){}

  ngOnInit() {
    // // Estas dos líneas de la creación normal de servicios
    // this.newService.obj.name = "Leo"
    // console.log(this.newService.obj.name)

    this.newService.fetchData();
  }
}
