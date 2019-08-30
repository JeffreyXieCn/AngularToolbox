import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent, ReactiveFormsComponent],
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsRoutingModule]
})
export class MyReactiveFormsModule {}
