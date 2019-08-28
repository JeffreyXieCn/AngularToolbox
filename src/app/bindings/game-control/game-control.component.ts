import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  providers: [LoggingService]
})
export class GameControlComponent implements OnInit {
  @Output() numberGenerated = new EventEmitter<{ next: number }>();
  private counter = 0;
  private ref: number;

  startDisabled = false;
  stopDisabled = true;

  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  onStart() {
    this.logService.logToConsole('You started the game at ' + new Date());
    this.ref = window.setInterval(() => {
      this.counter++;
      this.numberGenerated.emit({ next: this.counter });
    }, 1000);
    this.startDisabled = true;
    this.stopDisabled = false;
  }

  onStop() {
    this.logService.logToConsole('You stopped the game at ' + new Date());
    window.clearInterval(this.ref);
    this.startDisabled = false;
    this.stopDisabled = true;
  }
}
