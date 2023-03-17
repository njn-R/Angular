import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: any

  constructor(private router:ActivatedRoute, private userService:UserService) {}

  ngOnInit():void {
    let id = this.router.snapshot.params['id']
    this.userService.getUser(id).subscribe(data => this.user = data)
  }
}
