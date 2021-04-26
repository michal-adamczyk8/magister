import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShelterEditComponent} from './shelter/shelter-new/shelter-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ShelterComponent} from './shelter/shelter.component';
import {HttpClientModule} from '@angular/common/http';
import {ShelterListComponent} from './shelter/shelter-list/shelter-list.component';
import {ShelterDetailsComponent} from './shelter/shelter-details/shelter-details.component';
import {ShelterItemComponent} from './shelter/shelter-list/shelter-item/shelter-item.component';
import {ShelterService} from './shelter/shelter-shared/shelter.service';
import {RouterModule, Routes} from '@angular/router';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { PetNewComponent } from './pet/pet-new/pet-new.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/shelters', pathMatch: 'full'},
    {path: 'shelters', component: ShelterListComponent,},
    {path: 'shelters/new', component: ShelterEditComponent},
    {path: 'shelter/:shelterName', component: ShelterDetailsComponent},
    {path: 'shelter/:shelterId/pets/new', component: PetNewComponent},
    {path: 'shelter/:shelterId/pets/:petId', component: PetDetailsComponent},
    {path: 'shelter/:shelterId/pets', component: PetListComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShelterEditComponent,
        ShelterComponent,
        ShelterListComponent,
        ShelterDetailsComponent,
        ShelterItemComponent,
        PetListComponent,
        PetDetailsComponent,
        PetNewComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ShelterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
