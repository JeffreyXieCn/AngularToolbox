import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ServicesRoutingModule } from './services-routing.module';
import { UserServiceComponent } from './user-service/user-service.component';
import { ActiveUsersComponent } from './user-service/active-users/active-users.component';
import { InactiveUsersComponent } from './user-service/inactive-users/inactive-users.component';
import { ActiveUsersFinishComponent } from './user-service-finish/active-users/active-users-finish.component';
import { InactiveUsersFinishComponent } from './user-service-finish/inactive-users/inactive-users-finish.component';
import { UserServiceFinishComponent } from './user-service-finish/user-service-finish.component';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [
    ServicesComponent,
    UserServiceComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveUsersFinishComponent,
    InactiveUsersFinishComponent,
    UserServiceFinishComponent
  ],
  imports: [CommonModule, FormsModule, ServicesRoutingModule]
})
export class ServicesModule {}
