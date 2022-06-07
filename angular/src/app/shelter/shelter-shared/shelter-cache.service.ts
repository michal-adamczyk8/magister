import { Injectable } from '@angular/core';
import { Shelter } from './shelter';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ShelterCache {
    shelterSubject: BehaviorSubject<Shelter>;

    constructor() {
        this.shelterSubject = new BehaviorSubject(null) ;
    }

    update(shelter: Shelter): void {
        this.shelterSubject.next(shelter);
    }

    retrieve(): Shelter {
        return this.shelterSubject.getValue();
    }
}