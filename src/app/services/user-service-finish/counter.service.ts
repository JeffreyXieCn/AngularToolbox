export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  stepActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
  }

  stepInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
  }
}
