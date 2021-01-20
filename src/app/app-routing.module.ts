import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  //{ path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'viewproducts', component: HomeComponent },
  { path: 'details/:productId', component: DetailsComponent },
  { path: 'Add', component: AddEmployeeComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'update/:productid', component: UpdateComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
