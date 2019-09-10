import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppBootstrapModule } from './shared/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DirectivesModule } from './directives/directives.module';
import { AppRoutingModule } from './app-routing.module';
import { BindingsModule } from './bindings/bindings.module';
import { ServicesModule } from './services/services.module';
import { RoutingsModule } from './routings/routings.module';
import { ComponentsModule } from './components/components.module';
import { MyFormsModule } from './forms/forms.module';
import { MyReactiveFormsModule } from './reactive-forms/reactive-forms.module';
import { PipesModule } from './pipes/pipes.module';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { MyHttpModule } from './http/http.module';

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    DirectivesModule,
    BindingsModule,
    ServicesModule,
    RoutingsModule,
    MyFormsModule,
    MyReactiveFormsModule,
    PipesModule,
    NgxBootstrapModule,
    MyHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
