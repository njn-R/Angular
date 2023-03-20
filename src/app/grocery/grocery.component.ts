import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
  grocery: any = "" 
  groceries: any[] = []

  addGrocery() {
    this.groceries.push({id:this.groceries.length+1, name:this.grocery})
  }
  removeGrocery(removeID:number) {
    this.groceries = this.groceries.filter(item => item.id !== removeID)
    this.groceries.forEach((item, index) =>  {
        item.id = index + 1
    })
  }
}