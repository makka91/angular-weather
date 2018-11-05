import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from './weather';

@Component({
  selector: 'app-home',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})

export class CityDetailComponent implements OnInit {

  weather: any;
  forecast: List[];

  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    // Konsumerar servicen och fångar med id från URL:en
    // och använder som parameter för getWeather()
    let cityID = this.route.snapshot.paramMap.get('id');
    this.weatherService.getWeather(cityID).subscribe((response: any) => {
      this.weather = response;
    })

    // Konsumerar servicen och fångar med id från URL:en
    // och använder som parameter för getForecast()
    this.weatherService.getForecast(cityID).subscribe((response: any) => {
      this.forecast = response;
    })
  }

  //Tillåter navigering tillbaka till sök-komponenten
  goBack() {
    this.router.navigate(['/']);
  }

}
