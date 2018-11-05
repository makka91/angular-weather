import { Pipe, PipeTransform } from '@angular/core';
import { List } from './weather';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {
  transform(forecast: List[]): any {
    
    //Skapar behållare för datum
    //Dessa används för att sikta in tomorrowDate mellan
    //todayDate och lastDate för att ge morgondagens prognoser

    //Sätter dagens datum
    let todayDate = new Date();

    let tomorrowDate = new Date();

    //Sätter dagens datum + 1 för morgondagens datum
    tomorrowDate.setDate(todayDate.getDate() + 1);

    tomorrowDate.setHours(5);

    let lastDay = new Date();

    //Sätter dagens datum + 2 för övermorgons datum
    lastDay.setDate(todayDate.getDate() + 2);

    lastDay.setHours(8);

    //Returnerar det omvandlade unix-värdet till vanligt datum
    //och returnerar de värden som kvalificerar in som
    //morgondagens prognos mellan 07.00 - 07.00
    return forecast.filter((forecast: List) => {
      let dateForForecast = new Date(forecast.dt * 1000);
      return dateForForecast > tomorrowDate && dateForForecast < lastDay
    });
  }
}
