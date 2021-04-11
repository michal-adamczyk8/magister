import {Shelter} from './shelter';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ShelterService {
    sheltersChanged = new Subject<Shelter[]>();
    private shelters: Shelter[] = [];

    constructor(private httpClient: HttpClient) {
    }

    addShelter(newShelter: Shelter) {
        console.log('submitting service -enter')
        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(newShelter);
        this.shelters.push(newShelter);
        return this.httpClient.post<any>('http://localhost:8080/shelter', body, {headers}).subscribe(
        );
    }

    getAllShelters() {
        return this.httpClient.get<Shelter[]>('http://localhost:8080/shelter/all');
    }
}
