import {Component, OnInit} from '@angular/core';
import {Shelter} from '../shelter-shared/shelter';
import {ShelterService} from '../shelter-shared/shelter.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-shelter-list',
    templateUrl: './shelter-list.component.html',
    styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit {
    shelters: Shelter[];

    constructor(private shelterService: ShelterService, private appRouter: Router) {
    }

    ngOnInit() {
        this.shelterService.getAllShelters().subscribe(
            response => {
                this.shelters = response;
            }
        );
    }
    goToShelterDetails(shelter: Shelter) {

    }

}
