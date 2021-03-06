import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './containers/register/register.component';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  { path: '', component: RegisterComponent
  }
];



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class RegisterModule { }
