import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persons-private',
  templateUrl: './persons-private.component.html',
  styleUrls: ['./persons-private.component.css']
})
export class PersonsPrivateComponent {
  persons: any[] = []

  constructor(private userservice:UserService, private http:HttpClient) {}

  ngOnInit():void {
    this.persons = this.userservice.getUsers()
  }
}
