import { Directive ,HostListener,EventEmitter} from '@angular/core';
import { Observable,Subject,interval } from 'rxjs';
import {takeUntil, tap,filter} from  'rxjs/operators'
@Directive({
  selector: '[appHoldable]'
})
export class HoldableDirective {

  constructor() { }

}
