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
 outerStrokeColor= "#defdef"
 innerStrokeColor= "#ce7e8e"
 animation = true
animationDuration= 1000
 
  ngOnInit() {
 
  }
 
}

