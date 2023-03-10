import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  showme:boolean = false 
  displayItem:boolean = true

  color:string = 'blue'
  num:number = 0

  persons = [
    {
      name:"Sajid",
      age:25,
      gender:"Male"
    },
    {
      name:"Vimal",
      age:24,
      gender:"Male"
    },
     {
      name:"Bincy",
      age:23,
      gender:"Female"
    },
     {
      name:"Neeraj",
      age:26,
      gender:"Male"
    }
  ]

}
