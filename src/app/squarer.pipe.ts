import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarer'
})
export class SquarerPipe implements PipeTransform {

  transform(value: number): number {
    return Math.sqrt(value)
  }

}
