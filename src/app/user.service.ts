import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://jsonplaceholder.typicode.com/users/"

  constructor(private http:HttpClient) { }

  getUsers() {
    return [
          {id: 1, name: 'Sadik', city:"EKM", salary:25000, dob: new Date("01/10/2000")},
          {id: 2, name: 'Jagan', city:"TRRSR", salary:15000, dob: new Date("11/15/2003")},
          {id: 3, name: 'Rani', city:"Aleppy", salary:20000, dob: new Date("03/15/2002")},
          {id: 4, name: 'Sajesh', city:"Ktm", salary:15000, dob: new Date("06/20/2000")},
    ]
  }

  getTypicodeUsers () {
    return this.http.get(this.url).pipe(catchError((err)=> {return throwError(err)}))
  }

  getUser(id:number) {
    return this.http.get(`${this.url}/${id}`).pipe(catchError((err)=> {return throwError(err)}))
  }

}
