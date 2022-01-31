import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, TestcomponentComponent]
})
export class AppModule { }
