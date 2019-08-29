import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';

const componentsRoutes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
