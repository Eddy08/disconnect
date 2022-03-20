import { Component, OnInit } from '@angular/core';
import { ToastrService } from './common/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private toastrService:ToastrService){}
  ngOnInit() {
    
  }
  handleInfo(msg: string,title?:"Operation Success"){
    this.toastrService.success(msg,title);
  }
   query:string="hanuman";
  results:number=1;
  searchedQuery="https://youtube.com/"+this.query+"/"+this.results
  handleSearchedQuery(e:any){
    this.query=e;
    this.searchedQuery="https://youtube.com/"+this.query+"/"+this.results
  }
  handleResultQuery(e:any){
    if(e!=1) this.results=e;
    this.searchedQuery="https://youtube.com/"+this.query+"/"+this.results

  }
}
