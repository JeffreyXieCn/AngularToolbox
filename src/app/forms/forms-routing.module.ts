import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const formsRoutes: Routes = [
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
