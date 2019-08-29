import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const directivesRoutes: Routes = [
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
