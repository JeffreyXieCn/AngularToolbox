import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { GameControlComponent } from './bindings/game-control/game-control.component';
import { EvenComponent } from './bindings/even/even.component';
import { OddComponent } from './bindings/odd/odd.component';
import { UserServiceComponent } from './services/user-service/user-service.component';
import { ActiveUsersComponent } from './services/user-service/active-users/active-users.component';
import { InactiveUsersComponent } from './services/user-service/inactive-users/inactive-users.component';
import { ActiveUsersFinishComponent } from './services/user-service-finish/active-users/active-users-finish.component';
import { InactiveUsersFinishComponent } from './services/user-service-finish/inactive-users/inactive-users-finish.component';
import { UserServiceFinishComponent } from './services/user-service-finish/user-service-finish.component';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DirectivesModule } from './directives/directives.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    UserServiceComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveUsersFinishComponent,
    InactiveUsersFinishComponent,
    UserServiceFinishComponent,
    SideNavComponent
  ],
  imports: [BrowserModule, FormsModule, SharedModule, AppRoutingModule, DirectivesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
