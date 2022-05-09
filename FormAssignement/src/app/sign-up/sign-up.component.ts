import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  constructor() { }
  user:User = new User('','',null,null,0,);
  // userArray:User[] = JSON.parse(localStorage.getItem('arr2') || '[]');

  ngOnInit(): void {
  }

  @ViewChild('DemoForm') DemoForm!: NgForm;

  onSubmit(){
    // console.log(Value);
    let Userdata = {
      "name": this.DemoForm?.value.name,
      "fname": this.DemoForm?.value.fname,
      "Email": this.DemoForm?.value.Email,
      "Pwd": this.DemoForm?.value.Pwd,
      "Phone": this.DemoForm?.value.Phone,
    }
    let data = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(data);
    data = [...data, Userdata];
    localStorage.setItem('users', JSON.stringify(data));
    console.log(data);
    this.DemoForm.reset();
    window.location.reload();
  }
  users = JSON.parse(localStorage.getItem('users') || '{}');

}
