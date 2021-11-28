import { Directive ,HostListener,EventEmitter, Output} from '@angular/core';
import { Observable,Subject,interval } from 'rxjs';
import {takeUntil, tap,filter} from  'rxjs/operators'
@Directive({
  selector: '[holdable]'
})
export class HoldableDirective {
  @Output() holdTime: EventEmitter<number> =new EventEmitter();
  state: Subject<string> = new Subject();
  cancel: Observable<string>;
  constructor() { 
    this.cancel=this.state.pipe(
      filter(v=>v==='cancel'),
      tap(v=>{
        console.log('stop hold')
        this.holdTime.emit(1) 
      })
    )
  }

  @HostListener('mouseup',['$event'])
  @HostListener('mouseleave',['$event'])
  onExit(){
    this.state.next('cancel')
  }

  @HostListener('mousedown',['$event'])
  onHold(){
    console.log('started hold')
    this.state.next('start')
    const n=10;
    interval(n).pipe(takeUntil(this.cancel),tap(v=>{
      this.holdTime.emit(Math.ceil(v/n)==0 ? 1:Math.ceil(v/n))
    })).subscribe();
  }


}
