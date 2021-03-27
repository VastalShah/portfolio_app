import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  userForm!: FormGroup;
  formControls: any;
  formSubmitted!: boolean;
  pass: any;
  email: any;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
    this.formControls = this.userForm.controls;
  }

  handleEmail(event: any){
    this.email = event.target.value;
  }

  handlePassword(event: any){
    this.pass = event.target.value;
  }

  handleFormData(){
    this.formSubmitted = true;
    if(this.userForm.invalid){
      console.log("Form not submited");
      return;
    } else{
      if(localStorage.length > 0){
        if(localStorage.getItem("email") == this.email && localStorage.getItem("password") == this.pass){
          alert("You have signed in!");
        }else{
          alert("Username or password do not match");
        }
      } else{
        alert("You are not registered. Please signup")
      }
    }
  }

}
