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

}
