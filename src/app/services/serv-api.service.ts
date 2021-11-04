import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ServApiService {

  constructor(private http: HttpClient) { }
  
  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Chile&rapidapi-host=covid-19-coronavirus-statistics.p.rapidapi.com&rapidapi-key=ffe40a25damsh1c621159c7d38bap18cf2fjsn4b9f6f83394b');
  }
}
  