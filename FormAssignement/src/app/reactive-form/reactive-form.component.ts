import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  exform!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.exform = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      cname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      CGPA: new FormControl(null, [Validators.required]),
      pass: new FormControl(null, [Validators.required]),
      joining: new FormControl(null, [Validators.required]),
      skills: new FormControl(null, [Validators.required]),
      file: new FormControl(null, [Validators.required]),
    });
  }
  clicksub() {
    if (this.exform.controls['name'].invalid) {
      alert('Please fill the username correctly.');
    } else if (this.exform.controls['cname'].invalid) {
      alert('Please fill the College name correctly.');
    } else if (this.exform.controls['CGPA'].invalid) {
      alert('Please fill the cgpa correctly.');
    } else if (this.exform.controls['pass'].invalid) {
      alert('Please fill the year of passing correctly.');
    } else if (this.exform.controls['joining'].invalid) {
      alert('Please fill the date of joining correctly.');
    } else if (this.exform.controls['skills'].invalid) {
      alert('Please fill the skills correctly.');
    } else if (this.exform.controls['file'].invalid) {
      alert('Please upload the file correctly.');
    }
    // console.log(this.exform.value);

    if (this.exform.valid) {
      this.router.navigate(['/reactiveform']);

      let data = JSON.parse(localStorage.getItem('data') || '[]');
      console.log(data);

      data = [...data, this.exform.value];

      localStorage.setItem('data', JSON.stringify(data));
    }
    console.log(this.exform);
    this.exform.reset();
    window.location.reload();
  }
  data = JSON.parse(localStorage.getItem('data') || '{}');
}
