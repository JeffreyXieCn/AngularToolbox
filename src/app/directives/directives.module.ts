import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './structure-directive/unless.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DirectivesComponent, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective],
  imports: [CommonModule, FormsModule, DirectivesRoutingModule]
})
export class DirectivesModule {}
