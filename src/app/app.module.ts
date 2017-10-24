import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { OneComponentComponent } from './one-component/one-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
