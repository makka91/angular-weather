import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { WeatherService } from './weather.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { DateTransformPipe } from './city-detail/date-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityDetailComponent,
    CitySearchComponent,
    DateTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
