import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  classtoApply:string = "colorClass italicClass boldClass"
  applyBoldClass:boolean = true
  applyItalicClass:boolean = true

  isBold:boolean = true
  isItalic:boolean = true
  fontSize = 40
  hasError:boolean = true

  employeeName:string = ""

  addClasses() {
    return {
      boldClass: this.applyBoldClass,
      italicClass: this.applyItalicClass
    }
  }
  setCssStyles() {
    return {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size': this.fontSize ? '40px' : 'normal'
    }
  }
}
