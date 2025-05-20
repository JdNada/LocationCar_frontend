import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private readonly carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(data => this.cars = data);
  }

  deleteCar(id: number): void {
    this.carService.deleteCar(id).subscribe(() => {
      this.cars = this.cars.filter(car => car.id !== id);
    });
  }
}
