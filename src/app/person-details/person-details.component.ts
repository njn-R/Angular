import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
  users: any[] = []

  constructor(private userservice:UserService, private http:HttpClient) {}

  ngOnInit():void {
    this.users = this.userservice.getUsers()
  }
}
