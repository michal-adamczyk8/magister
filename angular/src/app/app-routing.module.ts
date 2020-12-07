import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShelterListComponent} from './shelter/shelter-list/shelter-list.component';
import {ShelterEditComponent} from './shelter/shelter-new/shelter-new.component';
import {ShelterDetailsComponent} from './shelter/shelter-details/shelter-details.component';

const routes: Routes = [];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
