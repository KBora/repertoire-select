import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './containers/auth-form/auth-form.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
