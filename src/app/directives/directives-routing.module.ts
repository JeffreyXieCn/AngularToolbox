import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives.component';

const directivesRoutes: Routes = [
  {
    path: 'directives',
    component: DirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {}
