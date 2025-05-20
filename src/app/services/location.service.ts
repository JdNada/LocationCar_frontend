import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Location {
  id?: number;
  latitude: number;
  longitude: number;
  timestamp?: string;
}

@Injectable({ providedIn: 'root' })
export class LocationService {
  private baseUrl = 'http://localhost:8080/api/locations';

  constructor(private http: HttpClient) {}

  getCurrentLocation(carId: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/car/${carId}/current`);
  }

  getLocationHistory(carId: number): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/car/${carId}/history`);
  }

  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(this.baseUrl, location);
  }
}
