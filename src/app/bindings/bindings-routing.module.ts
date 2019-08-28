import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings.component';

const directivesRoutes: Routes = [
  {
    path: 'bindings',
    component: BindingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule]
})
export class BindingsRoutingModule {}
