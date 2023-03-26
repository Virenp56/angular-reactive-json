import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], status: string): any[] {
    if (!items) {
      return [];
    }

    if (!status) {
      return items;
    }

    status = status.toLowerCase();

    return items.filter(item => item.status.toLowerCase() === status);
  }
}