import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsPrivateComponent } from './persons-private/persons-private.component'; 
import { GroceryComponent } from './grocery/grocery.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes:Routes = [
  { path:"", redirectTo: '/details', pathMatch: 'full'},
  { path:"details", component: PersonDetailsComponent},
  { path:"private", component: PersonsPrivateComponent},
  { path:"grocery", component: GroceryComponent},
  { path:"rxjs", component: RxjsComponent},
  { path:"rxjs1", component: Rxjs1Component},
  { path:"forms", component: AngularformsComponent},
  { path:"rforms", component: ReactiveformsComponent},
  
  { path:"user/:id", component: UserComponent,
    children: [
      {path:"", redirectTo: 'home', pathMatch: 'full'},
      {path:"home", component: HomeComponent},
      {path:"office", component: OfficeComponent}
    ]
  },

  {path:"product", loadChildren: () => import('./product/product.module').then(data => data.ProductModule)},
  { path: "**", component: ErrorPageComponent},
  


]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
