import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './http.component';

const httpRoutes: Routes = [
  {
    path: 'http',
    component: HttpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(httpRoutes)],
  exports: [RouterModule]
})
export class HttpRoutingModule {}
