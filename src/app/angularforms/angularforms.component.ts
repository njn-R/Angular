import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angularforms',
  templateUrl: './angularforms.component.html',
  styleUrls: ['./angularforms.component.css']
})
export class AngularformsComponent {
  countries:string[] = ["India", "UK", "US"]

  user = {
    id:1,
    firstName: "John",
    email: "john@gmail.com",
    phone: "123-456-342",
    country: "US"
  }

  onSubmit(formData:NgForm) {
    console.log(formData.form.value)
  }
}
