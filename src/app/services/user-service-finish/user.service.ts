import { CounterService } from './counter.service';

export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers.splice(id, 1)[0]);
    this.counterService.stepActiveToInactiveCounter();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers.splice(id, 1)[0]);
    this.counterService.stepInactiveToActiveCounter();
  }
}
