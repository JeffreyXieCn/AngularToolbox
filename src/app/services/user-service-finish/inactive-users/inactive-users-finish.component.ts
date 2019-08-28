import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users-finish',
  templateUrl: './inactive-users-finish.component.html',
  styleUrls: ['./inactive-users-finish.component.css']
})
export class InactiveUsersFinishComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
