import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormInComponent } from './form-in/form-in.component';
import { HttpClientModule } from '@angular/common/http';


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
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
