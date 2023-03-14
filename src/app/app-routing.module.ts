import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsPrivateComponent } from './persons-private/persons-private.component'; 

const routes:Routes = [
  { path:"", redirectTo: '/details', pathMatch: 'full'},
  { path:"details", component: PersonDetailsComponent},
  { path:"private", component: PersonsPrivateComponent},
  { path: "**", component: ErrorPageComponent}

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
