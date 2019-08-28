import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users-finish',
  templateUrl: './active-users-finish.component.html',
  styleUrls: ['./active-users-finish.component.css']
})
export class ActiveUsersFinishComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
