import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-user-service-finish',
  templateUrl: './user-service-finish.component.html',
  styleUrls: ['./user-service-finish.component.css'],
  providers: [UserService, CounterService]
})
export class UserServiceFinishComponent {
  constructor(public counterService: CounterService) {}
}
