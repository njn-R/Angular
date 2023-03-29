import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/username.validator';


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

    ageCheck:boolean = false
    userForm:FormGroup = new FormGroup({})

    constructor(private fb:FormBuilder){}
    
    ngOnInit():void {
      this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3),forbiddenNameValidator]],
      password: [''],
      confirmPassword: [''],
      email: ['', Validators.email],
      age: [''],
      parentName: [''],
      Hobbies:this.fb.array([])
      // address: this.fb.group({
      //   city: [''],
      //   state: [''],
      //   country: ['']
      // })
      })
      this.userForm.get('age')?.valueChanges.subscribe(data =>{
        if(data < 18) this.ageCheck = true
        else this.ageCheck = false
        if(!data) this.ageCheck = false
      })
    }
    

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
  onAddHobby(){
    this.Hobbies.push(this.fb.control(''))
  }
  onDeleteHobby(i:number){
    this.Hobbies.removeAt(i)
  }

  get username() {
    return this.userForm.get('username')
  }
  get email() {
    return this.userForm.get('email')
  }
  get Hobbies() {
    return this.userForm.get('Hobbies') as FormArray
  }
}
