import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/pet/pet-shared/pet';
import { Router } from '@angular/router';
import { PetService } from 'src/app/pet/pet-shared/pet-service';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.css']
})
export class PetListItemComponent implements OnInit {
  @Input() pet: Pet;

  constructor(private appRouter: Router) { }

  ngOnInit(): void {
  }

  onNavToDetails(pet: Pet) {
    this.appRouter.navigate(['pets/details', pet.id]);
  }
}
