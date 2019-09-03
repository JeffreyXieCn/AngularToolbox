import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [PipesComponent, ReversePipe, SortPipe],
  imports: [CommonModule, FormsModule, PipesRoutingModule]
})
export class PipesModule {}
