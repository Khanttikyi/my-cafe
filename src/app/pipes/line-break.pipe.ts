// Angular
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns only first letter of string
 */
@Pipe({
  name: 'lineBreak',
})
export class LineBreakPipe implements PipeTransform {
  transform(value: string,): any {
    if (!value) return value;
    return value.replace(/(?:\r\n|\r|\n)/g,'<br>');
  }
  
}