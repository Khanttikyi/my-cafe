import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
  pure: false, // Set to false to ensure the pipe gets re-evaluated on changes
})
export class GroupByPipe implements PipeTransform {
  transform(collection: any[], property: string): any[] {
    if (!collection || !property) {
      return collection;
    }

    // Grouping logic using reduce
    const groupedCollection = collection.reduce((acc, obj) => {
      const key = obj[property];
      (acc[key] = acc[key] || []).push(obj);
      return acc;
    }, {});

    // Convert the grouped object back to an array
    return Object.keys(groupedCollection).map((key) => ({
      key,
      items: groupedCollection[key],
    }));
  }
}
