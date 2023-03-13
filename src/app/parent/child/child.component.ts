import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentData = ""
  @Output() childEmitter = new EventEmitter();

  childTextValue: string = "";

  sendData() {
    this.childEmitter.emit(this.childTextValue)
  }
}
