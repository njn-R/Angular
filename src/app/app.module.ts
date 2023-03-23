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
import { AgePipe } from './age.pipe';
import { ReversePipe } from './reverse.pipe';
import { MultiplyPipe } from './multiply.pipe';
import { SquarerPipe } from './squarer.pipe';
import { GroceryComponent } from './grocery/grocery.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';

import { EmployeeModule } from './employee/employee.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AngularformsComponent } from './angularforms/angularforms.component';

@NgModule({
  declarations: [
    AppComponent, AppTest, Test2Component, StructuralComponent, ParentComponent, ChildComponent, PersonDetailsComponent, PersonsPrivateComponent, ErrorPageComponent, AgePipe, ReversePipe, MultiplyPipe, SquarerPipe, GroceryComponent, UserComponent, HomeComponent, OfficeComponent, RxjsComponent, AngularformsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, EmployeeModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded")
  }
}
