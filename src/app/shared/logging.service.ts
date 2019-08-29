import { Injectable } from '@angular/core';

export class LoggingService {
  logToConsole(msg: string) {
    console.log(msg);
  }
}
