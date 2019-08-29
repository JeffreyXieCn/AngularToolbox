import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DirectivesModule } from './directives/directives.module';
import { AppRoutingModule } from './app-routing.module';
import { BindingsModule } from './bindings/bindings.module';
import { ServicesModule } from './services/services.module';
import { RoutingsModule } from './routings/routings.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    DirectivesModule,
    BindingsModule,
    ServicesModule,
    RoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
