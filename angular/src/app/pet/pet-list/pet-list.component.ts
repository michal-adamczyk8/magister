import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/pet-shared/pet';
import { PetService } from 'src/app/pet-shared/pet-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shelter } from 'src/app/shelter/shelter-shared/shelter';
import { ShelterService } from 'src/app/shelter/shelter-shared/shelter.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];
  shelterId: number;
  shelter: Shelter;

  constructor(
    private petService: PetService, 
    private shelterService: ShelterService,  
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.shelterId = +this.activatedRoute.snapshot.paramMap.get("shelterId");
    this.petService.getAllPetsForShelter(this.shelterId).subscribe(
      response => {
        this.pets = response;
      }
    )
  };

  onAddPet() {
    const httpUrl = '/shelter/' + this.shelterId + '/pets/new';
    this.router.navigate([httpUrl],
    {state: {data: this.shelterId}});
  }
}
