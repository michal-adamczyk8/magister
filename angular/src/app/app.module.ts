import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShelterEditComponent} from './shelter/shelter-new/shelter-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ShelterComponent} from './shelter/shelter.component';
import {HttpClientModule} from '@angular/common/http';
import {ShelterListComponent} from './shelter/shelter-list/shelter-list.component';
import { ShelterDetailsComponent } from './shelter/shelter-details/shelter-details.component';
import { ShelterItemComponent } from './shelter/shelter-list/shelter-item/shelter-item.component';
import {ShelterService} from './shelter/shelter-shared/shelter.service';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
    { path: '', redirectTo: '/shelters', pathMatch: 'full' },
    {
        path: 'shelters',
        component: ShelterListComponent,
        // children: [
        //     { path: 'new', component: ShelterEditComponent },
        //     {
        //         path: ':id',
        //         component: ShelterDetailsComponent,
        //     },
        //     {
        //         path: ':id/edit',
        //         component: ShelterEditComponent,
        //     }
        // ]
    },
    {path: 'shelters/new', component: ShelterEditComponent},
    {path: 'shelter/:id', component: ShelterDetailsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShelterEditComponent,
        ShelterComponent,
        ShelterListComponent,
        ShelterDetailsComponent,
        ShelterItemComponent
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
