import {Shelter} from './shelter';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Observable, Subscription} from 'rxjs';
import { environment } from '../../../environments/environment'
@Injectable({
    providedIn: 'root',
})
export class ShelterService {
    private baseUrl = environment.apiUrl;

    sheltersChanged = new Subject<Shelter[]>();
    private shelters: Shelter[] = [];

    constructor(private httpClient: HttpClient) {
    }

    addShelter(newShelter: Shelter) {
        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(newShelter);
        this.shelters.push(newShelter);
        return this.httpClient.post<any>(this.baseUrl + '/shelter', body, {headers}).subscribe(
        );
    }

    getAllShelters() {
        return this.httpClient.get<Shelter[]>(this.baseUrl + '/shelter/all');
    }

    deleteShelter(shelter: Shelter) {
        const httpUrl = this.baseUrl + '/shelter/' +  shelter.id;
        return this.httpClient.delete<Shelter>(httpUrl).subscribe();
    }

    getSingleShelter(shelterId: number): Observable<Shelter> {
        return this.httpClient.get<Shelter>(`${this.baseUrl}/shelter/details/${shelterId}`)
    }

    saveEditedShelter(shelter: Shelter): Subscription {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(shelter);
        return this.httpClient.put<Shelter>(`${this.baseUrl}/shelter/edit`, body, { headers }).subscribe();
    }
}
