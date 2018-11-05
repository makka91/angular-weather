export class Coord {
    lon: number;
    lat: number;
}

export class Main {
    temp: number;    
}

export class Name {
    name: string;
}

export class Weather {
    description: string;
}

export class Wind {
    speed: number;
    deg: number;
}

export class Sys {
    sunrise: number;
    sunset: number;
}

export class Clouds {
    all: number;
}

export class Rain {
    ["1h"]: number;
}

export class Snow {
    ["1h"]: number;
}

export class List {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    sys: Sys;
    dt_txt: string;
  }

export class WeatherData {
    coord: Coord;
    weather: Weather[];
    main: Main;
    wind: Wind;
    clouds: Clouds; 
    rain: Rain;
    snow: Snow;
    sys: Sys;
    id: string;
    name: string;

}