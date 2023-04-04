import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent  implements OnInit {
  showChild:boolean = true
  toChild: string = ""


  productName: string = ""
  productPrice: number = 0
  product:Product = new Product("", 0)

  constructor () { console.log("Contructor called")}

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  toggle() {
    this.showChild = !this.showChild
  }

  updateProduct() {
    // this.product = new Product()
    this.product.productName = this.productName
    this.product.productPrice = this.productPrice

  }
}
