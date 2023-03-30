import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class Rxjs1Component implements OnDestroy {

  mySubscription: Subscription = new Subscription()

  ngOnInit():void {
  //   //Promise
  //   const promise = new Promise((resolve) => {
  //     console.log("Promise call")
  //     setTimeout(() => {
  //       resolve("Promise working1")
  //       resolve("Promise working2")
  //       resolve("Promise working3")
  //     },2000)
  //   })
  //   promise.then(res => console.log(res))

  //   //Observable
  //   const observable = new Observable(observer => {
  //     console.log("Observer call")
  //     setTimeout(() => {
  //       observer.next("Observer working1")
  //       observer.next("Observer working2")
  //       observer.next("Observer working3")
  //     },2000)
  //   })
  //   observable.pipe(filter(d => d=="Observer working2")).subscribe(res => console.log(res))

  // }

    const observable = new Observable(sub => {
      let count = 0
      setInterval(() => {
        count++
        sub.next()
      },1000)
    })
    this.mySubscription = observable.subscribe(res => console.log(res))
  }

   ngOnDestroy():void {
    this.mySubscription.unsubscribe()
   }
}