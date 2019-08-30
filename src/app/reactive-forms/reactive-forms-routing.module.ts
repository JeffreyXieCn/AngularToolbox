import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms.component';

const formsRoutes: Routes = [
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule {}
