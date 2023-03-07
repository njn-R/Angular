import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-App';
  name = "Neeraj"
  fruits = ["Apple", "Orange", "Grapes"]

  public person = {
    name:"Saju"
  }

  getCurrentTime() {
    return Date.now()
  }
  greet() {
    return `Hello ${this.name}!`
  }
}
