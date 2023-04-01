import { Component } from '@angular/core';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css']
})
export class ProductParentComponent {
  salesProducts = [
    {id:1, pname: "Computer", price:45000},
    {id:2, pname: "TV", price:15000},
    {id:3, pname: "Mobile", price:25000},
    {id:4, pname: "Fashion", price:3000},
  ]

  categoryWise = [
    {id:1, pname: "Electronics", price:50000},
    {id:2, pname: "School", price:4000},
    {id:3, pname: "Appliances", price:25000},
    {id:4, pname: "Fashion", price:5000},
  ]
}
