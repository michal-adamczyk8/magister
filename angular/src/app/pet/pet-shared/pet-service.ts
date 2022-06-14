import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { PetPage } from './pet-page';
import { environment } from '../../../environments/environment'
import {PetStatusEnum} from '../../enum/pet-status.enum';
import {PetSexEnum} from '../../enum/pet-sex.enum';
import {PetTypeEnum} from '../../enum/pet-type.enum';

@Injectable({
    providedIn: 'root',
})
export class PetService {
    private baseUrl = environment.apiUrl;
    private pets: Pet[] = [];

    constructor(private httpClient: HttpClient) { }

    getSinglePet(petId: number): Observable<Pet> {
        const httpUrl = this.baseUrl + '/pet/details/' + petId;
        return this.httpClient.get<Pet>(httpUrl);
    }

    addPet(petForm: FormGroup, shelterId: number) {
        const newPet = new Pet(
            null,
            this.toPetType(petForm.value.type),
            petForm.value.name,
            this.toPetSex(petForm.value.sex),
            petForm.value.raceType,
            petForm.value.birthYear,
            petForm.value.birthMonth,
            petForm.value.weight,
            petForm.value.admittanceDate,
            petForm.value.description,
            petForm.value.foundPlace,
            shelterId,
            this.toPetStatus(petForm.value.status),
            null,
            null,
            petForm.value.imageUrl
        )
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(newPet);
        this.pets.push(newPet);
        const url = this.baseUrl + '/pet';
        return this.httpClient.post<any>(url, body, { headers }).subscribe();
    }


    getAllPets(page: number, size: number): Observable<PetPage> {
        let params = new HttpParams();
        params = params.append("page", page.toString());
        params = params.append("size", size.toString());
        return this.httpClient.get<PetPage>(`${this.baseUrl}` + '/pet/all', {params: params});
    }

    getAllPetsForShelter(shelterId: number, page: number, size: number): Observable<PetPage> {
        return this.httpClient.get<PetPage>(`${this.baseUrl}/shelter/pets/${shelterId}/${page}/${size}`);
    }

    deletePet(petId: number) {
        const httpUrl = this.baseUrl + '/pet/' + petId;
        return this.httpClient.delete<Pet>(httpUrl).subscribe();
    }

    saveEditedPet(pet: Pet) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(pet);
        return this.httpClient.put<Pet>(`${this.baseUrl}/pet/edit`, body, { headers }).subscribe();
    }

    toPetType(petType: string): string {
        switch(petType) {
            case 'Pies': return PetTypeEnum.DOG.toString();
            case 'Kot': return PetTypeEnum.CAT.toString();
        }
    } 

    toPetSex(petSex: string): string {
        switch(petSex) {
            case 'Pies': return PetSexEnum.DOG_MALE;
            case 'Suczka': return PetSexEnum.DOG_FEMALE;
            case 'Kot': return PetSexEnum.CAT_MALE;
            case 'Kocica': return PetSexEnum.CAT_FEMALE;
        }
    }

    toPetStatus(petStatus: string): string {
        switch(petStatus) {
            case 'Gotowy do adopcji': return PetStatusEnum.READY_TO_ADOPTION;
            case 'Gotowy do adopcji z domu tymczasowego': return PetStatusEnum.READY_TO_ADPTION_TEMPORARY_HOUSE;
            case 'Adoptowany': return PetStatusEnum.ADOPTED;
            case 'Do pilnej adopcji': return PetStatusEnum.URGENT;
            case 'Niekatualne': return PetStatusEnum.DELETED;
            case 'Przygotowywany do adopcji': return PetStatusEnum.PREPARED_FOR_ADOPTION;
        }
    }

    getPetSexValues() {
        return Object.values(PetSexEnum);
    }

    getPetTypeValues() {
        return Object.values(PetTypeEnum);
    }

    getPetStatusValues() {
        return Object.values(PetStatusEnum);
    }
}

