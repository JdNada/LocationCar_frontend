import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  id?: number;
  model: string;
  licensePlate: string;
  brand: string;
}

@Injectable({ providedIn: 'root' })
export class CarService {
  private readonly baseUrl = 'http://localhost:8080/api/cars';

  constructor(private readonly http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/${id}`);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/${id}`, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
