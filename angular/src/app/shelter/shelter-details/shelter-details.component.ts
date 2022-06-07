import { Component, OnInit } from '@angular/core';
import { Shelter } from '../shelter-shared/shelter';
import { ShelterService } from '../shelter-shared/shelter.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ShelterAddress } from '../shelter-shared/shelter-addres';
import { Location } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { ShelterCache } from '../shelter-shared/shelter-cache.service';

@Component({
    selector: 'app-shelter-details',
    templateUrl: './shelter-details.component.html',
    styleUrls: ['./shelter-details.component.css']
})
export class ShelterDetailsComponent implements OnInit {
    shelter: Shelter;
    shelterAddress: ShelterAddress;
    shelterId: number;
    private page = 0;
    private size = 10;
    isManagerOrAdmin: boolean;

    constructor(
        private shelterService: ShelterService,
        private router: Router, 
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private dialog: MatDialog,
        private authService: AuthenticationService,
        private shelterCacheService: ShelterCache
        ) {

    }

    ngOnInit() {
        this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
        this.getShelterFromApi()
    }

    getShelterFromApi() {
        const cachedShelter = this.shelterCacheService.retrieve();
        if (cachedShelter == null) {
          this.getShelterId();
          this.shelterService
            .getSingleShelter(this.shelterId)
            .subscribe((response: Shelter) => {
              this.shelter = response;
              this.shelterAddress = response.address;
            });
        } else {
          this.shelter = cachedShelter;
          this.shelterAddress = cachedShelter.address;
        }
      }
    getShelterId() {
        this.shelterId = +this.activatedRoute.snapshot.paramMap.get('shelterId');
      }


    onPetsOfShelter() {
        this.router.navigate(['shelter/pets', this.shelter.id, this.page, this.size]);
    }

    onTakersOfShelter() {
        this.router.navigate(['takers/shelter', this.shelter.id]);

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
              this.shelterService.deleteShelter(this.shelter);
              this.router.navigate(['/shelters']);
            }
          })
    }

    getStreetAddress(): string {
        if(this.shelterAddress.flatNumber) {
            return this.shelterAddress.streetName + ' ' + this.shelterAddress.houseNumber 
            + '/' + this.shelterAddress.flatNumber;
        }
        return this.shelterAddress.streetName + ' ' + this.shelterAddress.houseNumber;
    }

    onGoBack() {
        this.location.back();
    }
    
    onNavToEdit(shelter: Shelter) {
        let navigationExtras: NavigationExtras = {
          state: {
            shelter: this.shelter
          }
        };
        this.router.navigate(["shelter/details/edit", shelter.id], navigationExtras);
      }
}
