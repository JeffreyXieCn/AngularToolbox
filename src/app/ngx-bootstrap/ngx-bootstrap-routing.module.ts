import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxBootstrapComponent } from './ngx-bootstrap.component';

const ngxBsRoutes: Routes = [
  {
    path: 'ngx-bootstrap',
    component: NgxBootstrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ngxBsRoutes)],
  exports: [RouterModule]
})
export class NgxBootstrapRoutingModule {}
