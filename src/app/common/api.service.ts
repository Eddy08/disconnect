import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ApiCallService{
    constructor(private https: HttpClient) { }
    configUrl ="https://www.googleapis.com/youtube/v3/search?&key=AIzaSyB1FD2jXYz3lHDW0FFYvuHgcKecXqShzzM&part=snippet"
getConfig(results:number,query:string) {
  return this.https.get<any>(this.configUrl+"&maxResults="+results+"&q="+query);
}
}