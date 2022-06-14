import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Walk } from './walk';
import { AddWalkRequest } from './add-walk-request';
import { WalkStatus } from '../../enum/walk-status.enum';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WalkService {
    private baseUrl = environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
    }

    scheduleWalk(dateTime: Date, petId: number, userId: number) {
        const headers = {'content-type': 'application/json' }
        const req = new AddWalkRequest(dateTime, petId, userId, WalkStatus.CREATED);
        const body = JSON.stringify(req);
        return this.httpClient.post<Walk>(`${this.baseUrl}/walk`, body, {headers}).subscribe();
    }

    getWalksForShelter(shelterId: number): Observable<Walk[]> {
        return this.httpClient.get<Walk[]>(`${this.baseUrl}/walk/shelter/${shelterId}`);
    }

    getWalksForUser(userId: number): Observable<Walk[]> {
        return this.httpClient.get<Walk[]>(`${this.baseUrl}/walk/user/${userId}`)
    }

    confirmWalk(walkId: number) {
        return this.httpClient.patch<Walk>(`${this.baseUrl}/walk/${walkId}/confirm`, null).subscribe();
    }

    cancelWalk(walkId: number){
        return this.httpClient.patch<Walk>(`${this.baseUrl}/walk/${walkId}/cancel`, null).subscribe();
    }
}