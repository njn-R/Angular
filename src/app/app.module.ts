import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { ProductParentComponent } from './projection/product-parent/product-parent.component';
import { ProductchildComponent } from './projection/productchild/productchild.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { LifeChildComponent } from './lifecycle-hook/life-child/life-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIComponent } from './material-ui/material-ui.component';
import { MaterialUIModule } from './material-ui/material-ui.module';





@NgModule({
  declarations: [
    AppComponent, AppTest, Test2Component, StructuralComponent, ParentComponent, ChildComponent, PersonDetailsComponent, PersonsPrivateComponent, ErrorPageComponent, AgePipe, ReversePipe, MultiplyPipe, SquarerPipe, GroceryComponent, UserComponent, HomeComponent, OfficeComponent, RxjsComponent, AngularformsComponent, ReactiveformsComponent, Rxjs1Component, ProductParentComponent, ProductchildComponent, LifecycleHookComponent, LifeChildComponent, MaterialUIComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, EmployeeModule, NgxPaginationModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded")
  }
}
