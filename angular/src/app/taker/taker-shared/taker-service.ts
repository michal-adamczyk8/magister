import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TakerPage } from './taker-page';
import { Taker } from './taker';
import { PetPage } from 'src/app/pet-shared/pet-page';
import { NewTakerRequest } from './new-taker-request';

@Injectable({
    providedIn: 'root',
})
export class TakerService {
    private baseUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) {
    }

    getAllTakers(page: number, size: number): Observable<TakerPage> {
        let params = new HttpParams();
        params = params.append("page", page.toString());
        params = params.append("size", size.toString());
        return this.httpClient.get<TakerPage>(`${this.baseUrl}/taker/all`, {params: params});
    }


    getAllTakersForShelter(shelterId: number, page: number, size: number): Observable<TakerPage> {
        return this.httpClient.get<TakerPage>(`${this.baseUrl}/shelter/takers/${shelterId}/${page}/${size}`);
    }

    getSingleTaker(takerId: number): Observable<Taker> {
        const httpUrl = this.baseUrl + '/taker/details/' + takerId;
        return this.httpClient.get<Taker>(httpUrl);
    }

    getAllPetsForTaker(shelterId: number, page: number, size: number): Observable<PetPage> {
        return this.httpClient.get<PetPage>(`${this.baseUrl}/taker/pets/${shelterId}/${page}/${size}`);
    }

    saveEditedTaker(taker: Taker) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(taker);
        return this.httpClient.put<Taker>(`${this.baseUrl}/taker/edit`, body, { headers }).subscribe();
    }

    getUnassignedTakersForPet(shelterId: number, petId: number): Observable<Taker[]> {
        return this.httpClient.get<Taker[]>(`${this.baseUrl}/taker/available/${shelterId}/${petId}`);

    }
    
    addTaker(newTaker: NewTakerRequest) {
        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(newTaker);
        return this.httpClient.post<any>(`${this.baseUrl}/taker`, body, {headers}).subscribe();
    }

    deleteTaker(taker: Taker) {
    
        const httpUrl = this.baseUrl + '/taker/' +  taker.id;
        return this.httpClient.delete<Taker>(httpUrl).subscribe();
    }
}