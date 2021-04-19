import {Component, OnInit} from '@angular/core';
import {Shelter} from '../shelter-shared/shelter';
import { ShelterService } from '../shelter-shared/shelter.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shelter-details',
    templateUrl: './shelter-details.component.html',
    styleUrls: ['./shelter-details.component.css']
})
export class ShelterDetailsComponent implements OnInit {
    private shelter: Shelter;

    constructor(private shelterService: ShelterService, private router: Router) {
    }

    ngOnInit() {
        this.shelter = history.state.data;
    }

    onDelete() {
        console.log(this.shelter.shelterName)
        this.shelterService.deleteShelter(this.shelter);
        this.router.navigate(['/shelters'])
    }

}
