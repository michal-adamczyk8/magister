import {HttpClient} from "@angular/common/http";
import {Shelter} from "./shelter";

export class ShelterService {
  constructor(private httpClient: HttpClient) {
  }

  addShelter(newShelter: Shelter) {
   // this.httpClient.post()
  }
}
