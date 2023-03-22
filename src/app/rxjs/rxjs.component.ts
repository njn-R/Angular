import { Component } from '@angular/core';
import { filter, Observable, of, from, map } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  result:any
  nameList = ["Saajid", "Nevin", "Neeraj", "Beena"]

  student:Observable<any> = of(this.nameList)
  studentName:Observable<string> = of("Ajesh")
  
  studObj = {
    name: "Raju",
    age: 20
  }
  studentObject:Observable<any> = of(this.studObj)

  items = ["Fashion", "Electronics", "Household"]
  item$:Observable<string> = from(this.items)

  ngOnInit() {
    
    // const observable = new Observable(data => {
    //   try {
        
    //       data.next("Saajid") 
    //       data.next("Nevin")
    //       data.next("Neeraj")
    //       data.complete()
    //       data.next(10)
        
    //   } catch(err) {
    //     data.error(err)
    //   }
    // })
    // observable.subscribe(res => this.result = res)


    // this.student.subscribe(res => console.log(res))
    // this.item$.pipe(filter(d=> d === 'Fashion')).subscribe(res => console.log(res))
    // this.studentName.subscribe(x => console.log(x))
    // this.studentObject.subscribe(y => console.log(y))

    // this.item$.subscribe(z => console.log(z))

    of(10,20,30).pipe(map(x =>x*2)).subscribe(y => console.log(y))  
  }
}
