import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BindingsRoutingModule } from './bindings-routing.module';
import { BindingsComponent } from './bindings.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [BindingsComponent, GameControlComponent, EvenComponent, OddComponent],
  imports: [CommonModule, FormsModule, BindingsRoutingModule]
})
export class BindingsModule {}
