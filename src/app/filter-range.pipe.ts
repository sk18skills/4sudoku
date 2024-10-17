import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRange'
})
export class FilterRangePipe implements PipeTransform {
  transform(values: number[]): number[] {
    return values.filter(value => value >= 1 && value <= 4);
  }
}