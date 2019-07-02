import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_KEY='20aad9c7e5904e2c9ab103421192406';
@Injectable({
  providedIn: 'root'
})
export class ApiwheatherService {

  constructor(private http:HttpClient) { }

  getWeather(location:string):Observable<any>
  {
      return this.http.get('https://api.apixu.com/v1/current.json?key='+API_KEY+'&q=' + location);
  }

 
}
