import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: String, ...args: any[]): any {
    let chars = value.split('');
    let reverseChars = chars.reverse();
    return reverseChars.join('');
  }
}
