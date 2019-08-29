import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings.component';

const bindingsRoutes: Routes = [
  {
    path: 'bindings',
    component: BindingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(bindingsRoutes)],
  exports: [RouterModule]
})
export class BindingsRoutingModule {}
