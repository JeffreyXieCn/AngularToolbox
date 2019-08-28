import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  providers: [LoggingService]
})
export class DirectivesComponent {
  username = '';
  displayDetails = false;
  buttonClicks = [];
  // clickCounter = 0;

  constructor(private logger: LoggingService) {}

  onToggleDetails(event: any) {
    this.logger.logToConsole('You toggled the display of details');
    console.log(event);
    this.displayDetails = !this.displayDetails;
    if (this.displayDetails) {
      event.target.innerText = 'Hide details';
    } else {
      event.target.innerText = 'Display details';
    }

    // this.clickCounter++;
    //this.buttonClicks.push(this.clickCounter + ' button click');
    this.buttonClicks.push(this.buttonClicks.length + 1 + ' button click at ' + new Date());
  }

  getColor(index: number) {
    return index + 1 >= 5 ? 'blue' : 'white';
  }
}
