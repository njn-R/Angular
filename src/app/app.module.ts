import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTest } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  declarations: [
    AppComponent, AppTest, Test2Component, StructuralComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
