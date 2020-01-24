import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { apiEndpoint } from '../config'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    return this.http.get(`${apiEndpoint}/todos`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))))
  }

}