import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PetCache {
    petSubject: BehaviorSubject<Pet>;

    constructor() {
        this.petSubject = new BehaviorSubject(null);
    }

    update(pet: Pet): void {
        this.petSubject.next(pet);
    }    

    retrieve(): Pet {
        return this.petSubject.getValue();
    }
}