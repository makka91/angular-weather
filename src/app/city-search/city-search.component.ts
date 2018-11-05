import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  cityName = "";
  weather: any;
  constructor(private weatherService: WeatherService) { }

  // Känner av när användaren trycker på enter 
  // i sökrutan. Sökrutan sparar input-värde i cityName
  // som sedan används som parameter för att hämta data
  onKeyUp() {
    this.weatherService.getCity(this.cityName).subscribe((response: any) => {
      this.weather = response;
    })
  }
  ngOnInit() {

  }
}
