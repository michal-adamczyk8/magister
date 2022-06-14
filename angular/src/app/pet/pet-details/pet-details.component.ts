import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { PetService } from 'src/app/pet/pet-shared/pet-service';
import { Pet } from 'src/app/pet/pet-shared/pet';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Shelter } from 'src/app/shelter/shelter-shared/shelter';
import { Location } from '@angular/common';
import { Taker } from 'src/app/taker/taker-shared/taker';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { PetCache } from 'src/app/pet/pet-shared/pet-cache.service';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet: Pet;
  shelter: Shelter;
  petId: number;
  takers: Taker[] = [];
  isManagerOrAdmin: boolean;
  
  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location,
    private appRouter: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService,
    private petCacheService: PetCache) {}

  ngOnInit() {
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
    this.getCurrentPet();
  }

  getPetId() {
    this.petId = +this.route.snapshot.paramMap.get('petId');
  }

  getCurrentPet() {
    const cachedPet = this.petCacheService.retrieve();
    if(cachedPet == null) {
      this.getPetId();
      this.petService.getSinglePet(this.petId).subscribe(
        (response: Pet) => {
          this.pet = response;
          this.shelter = response.shelterDto;
          this.takers = response.takers;
        }
      );
    } else {
      this.pet = cachedPet;
      this.shelter = cachedPet.shelter;
      this.takers = cachedPet.takers;
    }
  }
  
  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz tego zwierzaka z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.petService.deletePet(this.pet.id);
        this.appRouter.navigate(['/pets']);
      }
    })
  }

  onGoBack() {
    this.location.back();
  }

  onNavToShelterDetails() {
      let navigationExtras: NavigationExtras = {
        state: {
          shelter: this.shelter
        }
      };
      this.appRouter.navigate(["/shelter", this.shelter.id], navigationExtras);
  }

  onNavToEdit() {
      let navigationExtras: NavigationExtras = {
      state: {
        shelter: this.shelter
      }
    };
    this.appRouter.navigate(["/pets/details/edit", this.pet.id], navigationExtras);
  }

  onNavToTakerDetails(takerId: number) {
    let navigationExtras: NavigationExtras = {
      state: {
        shelter: this.shelter
      }
    };
    this.appRouter.navigate(["/takers/details", takerId], navigationExtras);
  }

  onNavToPayment() {
    this.appRouter.navigate(["/pet/payment"]);
  }

  goToWalkAppointment() {
    this.appRouter.navigate(["/pet/walk", this.petId]);
  }

}
