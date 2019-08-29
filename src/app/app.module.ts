import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
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
import { BindingsModule } from './bindings/bindings.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, DirectivesModule, BindingsModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
