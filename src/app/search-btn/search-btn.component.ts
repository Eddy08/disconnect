import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-btn',
  templateUrl: './search-btn.component.html',
  styleUrls: ['./search-btn.component.css']
})
export class SearchBtnComponent {



  @Input() percent:number=1;
 radius= 60
 outerStrokeWidth= 10
 innerStrokeWidth= 10
 space= -10
 outerStrokeColor= "#defdef"
 innerStrokeColor= "#fff"
 animation = false
animationDuration= 100
  ngOnInit() {
  }


  
}

