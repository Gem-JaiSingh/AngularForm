import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:ReactiveFormComponent},
  {path:'reactiveform',component:ReactiveFormComponent},
  {path:'logIn',component:LogInComponent},
  {path:'signup',component:SignUPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
