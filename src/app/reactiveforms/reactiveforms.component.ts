import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
  export class ReactiveformsComponent {
    // userForm = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     country: new FormControl('India')
    //   })
    // })

    constructor(private fb:FormBuilder){}
    userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        country: ['']
      })
    })


  // loadData() {
  //   this.userForm.setValue({
  //     username: "Nevin",
  //     password: "password",
  //     confirmPassword: "password",
  //     address: {
  //       city: "EKM",
  //       state: "Kerala",
  //       country: "India"
  //     }
  //   })
  // }
  loadData() {
    this.userForm.patchValue({
      username: "Nevin",
      password: "password",
      confirmPassword: "password",
    })
  }

  get username() {
    return this.userForm.get('username')
  }
}
