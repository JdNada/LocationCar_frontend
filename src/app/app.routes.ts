import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { LocationHistoryComponent } from './components/location-history/location-history.component';

export const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'add-car', component: CarFormComponent },
  { path: 'locations/:carId', component: LocationHistoryComponent }
];
