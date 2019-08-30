import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultSubscription = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.signupForm);
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
  }
}
