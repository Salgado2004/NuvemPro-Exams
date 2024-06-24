import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: any): string {
    if(typeof(value) == "string"){
      return value;
    } else{
      let result = "";
      for(let i of value){
        result += i + ", ";
      }
      result = result.substring(0, result .length - 2);
      return result;
    }
  }

}
