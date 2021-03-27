import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  userForm!: FormGroup;
  formControls: any;
  formSubmitted!: boolean;
  pass: any;
  confirmpass: any;
  email: any;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.formControls = this.userForm.controls;
  }

  handleFormData(){
    this.formSubmitted = true;
    if(this.userForm.invalid){
      console.log("Form not submited");
      return;
    } else{
      if(this.pass != this.confirmpass){
        alert("UserName or password should be same");
        return;
      } else{
        if(localStorage.getItem("email") == this.email && localStorage.getItem("password") == this.pass){
          alert("You are already registered please signin");
        } else{
          localStorage.setItem("email", this.email);
          localStorage.setItem("password", this.pass);
          alert("You have succesfully registered");
        }
      }
    }
  }

  handleEmail(event: any){
    console.log(event.target.value);
    this.email = event.target.value;
  }

  handleConfirmPassword(event: any){
    this.pass = event.target.value;
  }

  handlePassword(event: any){
    this.confirmpass = event.target.value;
  }
}
