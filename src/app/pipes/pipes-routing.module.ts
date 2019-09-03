import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';

const pipesRoutes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pipesRoutes)],
  exports: [RouterModule]
})
export class PipesRoutingModule {}
