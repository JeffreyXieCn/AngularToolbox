import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapComponent } from './ngx-bootstrap.component';
import { NgxBootstrapRoutingModule } from './ngx-bootstrap-routing.module';
import { AppBootstrapModule } from '../shared/app-bootstrap.module';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@NgModule({
  declarations: [NgxBootstrapComponent, ModalComponentComponent],
  imports: [CommonModule, NgxBootstrapRoutingModule, AppBootstrapModule],
  entryComponents: [ModalComponentComponent]
})
export class NgxBootstrapModule {}
