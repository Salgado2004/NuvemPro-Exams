import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDinamicLoader]'
})
export class DinamicLoaderDirective {

  constructor(public view: ViewContainerRef ) { }

}
