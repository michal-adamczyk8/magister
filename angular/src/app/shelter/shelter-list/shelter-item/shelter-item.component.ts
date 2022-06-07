import {Component, Input, OnInit} from '@angular/core';
import {Shelter} from '../../shelter-shared/shelter';
import {Router, NavigationExtras} from '@angular/router';

@Component({
    selector: 'app-shelter-item',
    templateUrl: './shelter-item.component.html',
    styleUrls: ['./shelter-item.component.css']
})
export class ShelterItemComponent implements OnInit {
    @Input() shelter: Shelter;
    @Input() index: number;

    constructor(private appRouter: Router) {
    }

    ngOnInit() {
    }

    onNavToDetailsComponent(shelter: Shelter) {
        let navigationExtras: NavigationExtras = {
            state: {
                shelter: this.shelter
            }
        }
        this.appRouter.navigate(['/shelter', shelter.id], navigationExtras);
    }
}
