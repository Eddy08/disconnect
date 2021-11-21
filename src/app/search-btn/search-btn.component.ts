import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-btn',
  templateUrl: './search-btn.component.html',
  styleUrls: ['./search-btn.component.css']
})
export class SearchBtnComponent {

 percent= 75
 radius= 60
 outerStrokeWidth= 10
 innerStrokeWidth= 10
 space= -10
 outerStrokeColor= "#4882c2"
 innerStrokeColor= "#e7e8ea"
 animation = true
 animationDuration= 1000
 
  ngOnInit() {
 
  }
 
}

