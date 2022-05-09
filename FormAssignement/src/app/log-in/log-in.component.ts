import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild('LoginForm') LoginForm!: NgForm;
  onSubmit() {
    let logindata = {
      name: this.LoginForm?.value.name,
      password: this.LoginForm?.value.Password,
    };
    let data = JSON.parse(localStorage.getItem('users') || '[]');
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (
          logindata.name == data[i].name &&
          logindata.password == data[i].Pwd
        ) {
          alert('Login Successfully');
          this.LoginForm.reset();
          break;
        } else {
          alert('Please SignUp');
        }
      }
    }
  }
  data = JSON.parse(localStorage.getItem('users') || '[]');
}
