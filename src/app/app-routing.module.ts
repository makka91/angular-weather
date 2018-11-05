import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitySearchComponent } from './city-search/city-search.component';

const routes: Routes = [
  {
    path: '', component: CitySearchComponent
  },
  {
    path: 'detail', component: CityDetailComponent
  },
  {
    path: "detail/:id",
    component: CityDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
