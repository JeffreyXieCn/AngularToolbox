import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent, SignupComponent],
  imports: [CommonModule, FormsModule, FormsRoutingModule]
})
export class MyFormsModule {}
