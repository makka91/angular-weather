import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //Data för API-anrop
  apiKey = "271dba59f18b463e5b5b9bbf16cad66f";
  urlCity = 'http://api.openweathermap.org/data/2.5/weather?q='
  urlWeather = "http://api.openweathermap.org/data/2.5/weather?id=";
  urlForecast = "http://api.openweathermap.org/data/2.5/forecast?id=";
  unit = "&units=metric";

  constructor(private http: Http) {
  }

  //Hämtar "current weather"-data från API baserat på ID
  getWeather(cityID: string): Observable<any> {
    let url = this.urlWeather + cityID + '&APPID=' + this.apiKey + this.unit;
    let data = this.http.get(url).map(response => response.json()) as Observable<any>;
    return data;
  }

  //Hämtar "forecast"-data från API baserat på ID
  getForecast(cityID: string): Observable<any> {
    let url = this.urlForecast + cityID + '&APPID=' + this.apiKey + this.unit;
    let data = this.http.get(url).map(response => response.json()) as Observable<any>;
    return data;
  }

  //Hämtar data från API baserat på namn på stad
  getCity(cityName: string): Observable<any> {
    let url = this.urlCity + cityName + '&APPID=' + this.apiKey + this.unit;
    let data = this.http.get(url).map(response => response.json()) as Observable<any>;
    return data;
  }

}
