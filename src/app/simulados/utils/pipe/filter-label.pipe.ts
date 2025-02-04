import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLabel',
  standalone: true
})
export class FilterLabelPipe implements PipeTransform {
  private filterMap: Map<string, string> = new Map([
    ["provider", "provedor"],
    ["level", "nível"]
  ]);

  transform(key: string): string {
    return this.filterMap.get(key);
  }

}
