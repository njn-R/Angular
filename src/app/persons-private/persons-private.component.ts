import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persons-private',
  templateUrl: './persons-private.component.html',
  styleUrls: ['./persons-private.component.css']
})
export class PersonsPrivateComponent {
  persons: any = []
  errorMessage:string = "Loading..."

  constructor(public userservice:UserService) {}

  ngOnInit():void {
    // this.persons = this.userservice.getUsers()
    this.userservice.getTypicodeUsers().subscribe( {
      next:((result:any) => this.persons = result),
      error:(err)=>console.log(this.errorMessage = err.message)
    })
  }
}
