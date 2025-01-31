import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    value.sort((a, b) => {
      return a['name'].localeCompare(b['name']);
    });
    return value;
  }
}
