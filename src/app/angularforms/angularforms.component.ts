import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-angularforms',
  templateUrl: './angularforms.component.html',
  styleUrls: ['./angularforms.component.css']
})
export class AngularformsComponent {
  countries:string[] = ["India", "UK", "US"]

  userModel = new User("2", "Sandeep", "s@s.com", 234, "India")

  user = {
    id:"",
    firstName: "John",
    email: "john@gmail.com",
    phone: "1234",
    country: "US"
  }

  constructor(private userService:UserService) {}

  onSubmit(formData:NgForm) {
    this.userService.postUser(this.user).subscribe(data => console.log("posted"))
  }

  
}
