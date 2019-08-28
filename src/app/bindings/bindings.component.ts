import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings-component',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  evens: number[] = [];
  odds: number[] = [];

  onNumberGenerated(data: { next: number }) {
    if (data.next % 2 === 0) {
      this.evens.push(data.next);
    } else {
      this.odds.push(data.next);
    }
  }
}
