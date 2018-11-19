import { Injectable } from '@angular/core';
// import { loanData } from './data/loan/loanData';
import { PERIODDATA } from './data/period/periodData';
import { Period } from './data/period/period';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  public api = 'https://my-json-server.typicode.com/rrafilianto/json/article'

  constructor( private http: HttpClient ) { }

  getPeriod(): Observable<Period[]> {
    return of(PERIODDATA)
  }

  getData(): Observable<any> {
    return this.http.get(this.api)
  }

  postData(dataPost): Observable<any> {
    return this.http.post(this.api, dataPost)
  }
  
}