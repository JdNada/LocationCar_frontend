import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  imports: [CommonModule]
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
