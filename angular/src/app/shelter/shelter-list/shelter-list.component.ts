import {Component, OnDestroy, OnInit} from '@angular/core';
import {Shelter} from '../shelter-shared/shelter';
import {ShelterService} from '../shelter-shared/shelter.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-shelter-list',
    templateUrl: './shelter-list.component.html',
    styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit, OnDestroy {
    shelters: Shelter[];
    private subscription: Subscription;

    constructor(private shelterService: ShelterService, private appRouter: Router) {
    }

    ngOnInit() {
        this.shelterService.getAllShelters().subscribe(
            response => {
                this.shelters = response;
            }
        );

        this.subscription = this.shelterService.sheltersChanged.subscribe((sheltersChanged: Shelter[]) => {
            this.shelters = sheltersChanged;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
