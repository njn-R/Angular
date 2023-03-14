import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppTest } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { StructuralComponent } from './structural/structural.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsPrivateComponent } from './persons-private/persons-private.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent, AppTest, Test2Component, StructuralComponent, ParentComponent, ChildComponent, PersonDetailsComponent, PersonsPrivateComponent, ErrorPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
