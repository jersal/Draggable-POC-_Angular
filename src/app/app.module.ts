import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularDraggableModule],
  declarations: [ AppComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
