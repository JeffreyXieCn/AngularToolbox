import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { WarningAlertComponent } from './directives/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './directives/success-alert/success-alert-component';
import { BindingsComponent } from './bindings/bindings.component';
import { GameControlComponent } from './bindings/game-control/game-control.component';
import { EvenComponent } from './bindings/even/even.component';
import { OddComponent } from './bindings/odd/odd.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/structure-directive/unless.directive';
import { UserServiceComponent } from './services/user-service/user-service.component';
import { ActiveUsersComponent } from './services/user-service/active-users/active-users.component';
import { InactiveUsersComponent } from './services/user-service/inactive-users/inactive-users.component';
import { ActiveUsersFinishComponent } from './services/user-service-finish/active-users/active-users-finish.component';
import { InactiveUsersFinishComponent } from './services/user-service-finish/inactive-users/inactive-users-finish.component';
import { UserServiceFinishComponent } from './services/user-service-finish/user-service-finish.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    BasicHighlightDirective,
    BindingsComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BetterHighlightDirective,
    UnlessDirective,
    UserServiceComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveUsersFinishComponent,
    InactiveUsersFinishComponent,
    UserServiceFinishComponent
  ],
  imports: [BrowserModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
