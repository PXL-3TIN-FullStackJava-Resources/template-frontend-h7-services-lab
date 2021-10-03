import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(3)]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      age: new FormControl(null,[Validators.required]),
      subscription: new FormControl('',[Validators.required])
    });
  }

  onSubmit(): void{
    let newUser: User = new User('','','','',0,'');
    Object.assign(newUser,this.registerForm.value);
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

}
