import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      for (const prop in item) {
        if (item.hasOwnProperty(prop) && typeof item[prop] === 'string' && item[prop].toLowerCase().includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
  }
}
