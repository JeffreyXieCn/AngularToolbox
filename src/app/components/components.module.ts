import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert-component';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [ComponentsComponent, WarningAlertComponent, SuccessAlertComponent],
  imports: [CommonModule, ComponentsRoutingModule]
})
export class ComponentsModule {}
