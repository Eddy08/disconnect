import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  searchKeyword=""
  @Output() searchQuery=new EventEmitter();
  ngOnInit(): void {
  }
  handleInputFields(){
    this.searchQuery.emit(this.searchKeyword)
  }


}
