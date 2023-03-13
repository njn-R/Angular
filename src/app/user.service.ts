import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
          {id: 1, name: 'Sadik', city:"EKM", salary:25000, dob: new Date("01/10/2000")},
          {id: 2, name: 'Jagan', city:"TRRSR", salary:15000, dob: new Date("11/15/2003")},
          {id: 3, name: 'Rani', city:"Aleppy", salary:20000, dob: new Date("03/15/2002")},
          {id: 4, name: 'Sajesh', city:"Ktm", salary:15000, dob: new Date("06/20/2000")},
    ]
  }
}
