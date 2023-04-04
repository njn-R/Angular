import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.css']
})
export class LifeChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() receivedData = ""
  @Input() product: any
  counter:number = 0
  interval:any

  constructor () { console.log("Child Contructor called")}

  ngOnInit(): void {
    console.log("Child ngOnInit called")

    // this.interval = setInterval(()=>{
    //   this.counter++
    //   console.log(this.counter)
    // },3000)
  }

  ngOnDestroy(): void {
    // console.log("Child destroyed")
    // clearInterval(this.interval)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("Change detected")

    // let child1 = changes['receivedData']
    // console.log("Previous Value = ", child1.previousValue)
    // console.log("Current Value = ", child1.currentValue)
  
  }

  ngDoCheck(): void {
    console.log("Changes on product detected", this.product)
  }
}
