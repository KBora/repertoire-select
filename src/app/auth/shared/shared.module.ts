import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './containers/auth-form/auth-form.component';



@NgModule({
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
