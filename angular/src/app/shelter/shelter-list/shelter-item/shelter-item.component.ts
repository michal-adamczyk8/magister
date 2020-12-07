import {Component, Input, OnInit} from '@angular/core';
import {Shelter} from '../../shelter-shared/shelter';

@Component({
    selector: 'app-shelter-item',
    templateUrl: './shelter-item.component.html',
    styleUrls: ['./shelter-item.component.css']
})
export class ShelterItemComponent implements OnInit {
    @Input() shelter: Shelter;
    @Input() index: number;

    constructor() {
    }

    ngOnInit() {
    }
}
