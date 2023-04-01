import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productchild',
  templateUrl: './productchild.component.html',
  styleUrls: ['./productchild.component.css']
})
export class ProductchildComponent {
  @Input() products: any
}
