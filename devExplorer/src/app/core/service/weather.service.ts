import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather.model';
import { environment } from 'src/enviroments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  private baseUrl = environment.weatherApi;
  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `${this.baseUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric&lang=en`
    );
  }
}
