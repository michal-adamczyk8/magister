import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PetService {
    petChanged = new Subject<Pet[]>();
    private pets: Pet[] = [];

    constructor(private httpClient: HttpClient) { }


    addPet(newPet: Pet) {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(newPet);
        this.pets.push(newPet);
        return this.httpClient.post<any>('http://localhost:8080/pet', body, { headers }).subscribe();
    }

    getAllPetsForShelter(shelterId: number) {
        const httpUrl = 'http://localhost:8080/pet/all/' + shelterId;
        return this.httpClient.get<Pet[]>(httpUrl); 
    }

    deletePet(petId: number) {
        const httpUrl = 'http://localhost:8080/pet/all/' + petId;
        return this.httpClient.delete<Pet>(httpUrl);
    }

}