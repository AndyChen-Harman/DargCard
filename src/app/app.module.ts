import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormInComponent } from './form-in/form-in.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FormInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
