import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiCallService } from '../common/api.service';
import {VideoData} from '../common/videoData'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,OnChanges {
  videoData: VideoData|undefined;
  constructor(private api:ApiCallService) { }

  ngOnInit(): void {
    this.getData();
  }
  ngOnChanges():void{
    this.getData();
  }
  @Input()
  searchedKeyword: string="hanuman";
  @Input()
  filter: number=3;
  getData(){
    this.api.getConfig(this.filter,this.searchedKeyword).subscribe((data)=>this.videoData={...data})
    console.log(this.videoData)
  }
}
