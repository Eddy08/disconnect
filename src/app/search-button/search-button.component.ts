import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {
   @Output() progressBarResult=new EventEmitter();
   progressBar:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  holdHandler(e: any){
    this.progressBar=e;
    this.progressBarResult.emit(e)
    console.log(e)
  }



}
