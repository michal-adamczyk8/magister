import {Component, OnInit} from '@angular/core';
import {Shelter} from '../shelter-shared/shelter';

@Component({
    selector: 'app-shelter-details',
    templateUrl: './shelter-details.component.html',
    styleUrls: ['./shelter-details.component.css']
})
export class ShelterDetailsComponent implements OnInit {
    private shelter: Shelter;

    constructor() {
    }

    ngOnInit() {
        this.shelter = history.state.data;
    }

}
