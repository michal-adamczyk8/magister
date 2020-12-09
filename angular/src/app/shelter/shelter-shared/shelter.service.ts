
import {Shelter} from './shelter';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ShelterService {
  constructor(private httpClient: HttpClient) {
  }

  addShelter(newShelter: Shelter) {
      const headers = { 'content-type': 'application/json'};
      const body = JSON.stringify(newShelter);
      return this.httpClient.post<any>('http://localhost:8080/shelter', body, {headers}).subscribe();
  }

  getAllShelters() {
      return this.httpClient.get<Shelter[]>('http://localhost:8080/shelter/all');
  }

    getShelterByName(shelterName: string) {
      return this.httpClient.get<Shelter>(`http://localhost:8080/shelter/${shelterName}`);
    }
}
