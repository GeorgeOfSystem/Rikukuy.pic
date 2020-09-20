import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  userForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private auth : AuthService, private router : Router) { }

  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      email:[ '', Validators.required ],
      password:[ '', Validators.required ]
    });
  }

  onLoginEmail(): void {
    console.log('user', this.userForm.value)
    this.auth.onLoginEmail( this.userForm.value.email,this.userForm.value.password).then(res => {
      console.log('userRes', res);
      this.redirect();
    }).catch(err => console.log('Error', err));
  }
  onloginGoogle() {
    this.auth.onLoginGoogle().then(res => {
      console.log('userRes', res);
      this.redirect();
    }).catch(err => console.log('Error', err));
  }
  onloginFacebook() {
    this.auth.onLoginFacebook().then(res => {
      console.log('userRes', res);
      this.redirect();
    }).catch(err => console.log('Error', err));
  }

  redirect() : void {
    this.router.navigate(['/home']);
  }

}