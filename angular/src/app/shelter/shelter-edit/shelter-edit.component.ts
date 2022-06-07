import { Component, OnInit } from '@angular/core';
import { Shelter } from '../shelter-shared/shelter';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ShelterService } from '../shelter-shared/shelter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { ShelterAddress } from '../shelter-shared/shelter-addres';
import { ShelterStatusEnum } from 'src/app/enum/shelter-status.enum';
import { NotificationService } from 'src/app/notification/notification.service';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { ShelterCache } from '../shelter-shared/shelter-cache.service';

@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-edit.component.html',
  styleUrls: ['./shelter-edit.component.css']
})
export class ShelterEditComponent implements OnInit {
  shelter: Shelter;
  shelterId: number;
  shelterForm: FormGroup;
  shelterAddress: ShelterAddress;
  shelterStatus = ShelterStatusEnum;
  shelterStatusEnumValues = [];

  constructor(
    private shelterService: ShelterService,
    private route: ActivatedRoute,
    private location: Location,
    private appRouter: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private shelterCache: ShelterCache
  ) { 
    this.shelterStatusEnumValues = Object.values(this.shelterStatus);
  }

  ngOnInit(): void {
    this.getCurrentShelter();
  }

  getCurrentShelter(): void {
    this.getShelterId();
    this.shelterService.getSingleShelter(this.shelterId).subscribe((response: Shelter) => {
      this.shelter = response;
      this.shelterAddress = response.address;
      this.onInitFormGroup(response);
    });
  }

  getShelterId(): void {
    this.shelterId = +this.route.snapshot.paramMap.get("shelterId");
  }

  onInitFormGroup(shelter: Shelter): void {
    this.shelterForm = new FormGroup({
      name: new FormControl(shelter.name),
      email: new FormControl(shelter.email), 
      phoneNumber: new FormControl(shelter.phoneNumber),
      nip: new FormControl(shelter.nip),
      regon: new FormControl(shelter.regon),
      description: new FormControl(shelter.description),
      streetName: new FormControl(shelter.address.streetName),
      houseNumber: new FormControl(shelter.address.houseNumber),
      flatNumber: new FormControl(shelter.address.flatNumber),
      city: new FormControl(shelter.address.city),
      zipCode: new FormControl(shelter.address.zipCode),
      status: new FormControl(shelter.status),
      websiteUrl: new FormControl(shelter.websiteUrl),
      facebookUrl: new FormControl(shelter.facebookUrl),
      instagramUrl: new FormControl(shelter.instagramUrl),
      twitterUrl: new FormControl(shelter.twitterUrl)
    });
  }

  onSaveChanges(shelterForm: NgForm): void {
    if(this.shelterForm.invalid) {
      this.shelterForm.markAllAsTouched();
      return;
    }
    this.editShelter(shelterForm);
    this.shelterService.saveEditedShelter(this.shelter);
    this.notificationService.notify(NotificationType.SUCCESS, "Schronisko zostało pomyślnie zaktualizowane.")
    this.goToDetails(this.shelter);
  }

  editShelter(shelterForm: NgForm): void {
    this.shelter.name = shelterForm.value.name;
    this.shelter.email = shelterForm.value.email;
    this.shelter.phoneNumber = shelterForm.value.phoneNumber;
    this.shelter.nip = shelterForm.value.nip;
    this.shelter.regon = shelterForm.value.regon;
    this.shelter.description = shelterForm.value.description;
    this.shelter.address.streetName = shelterForm.value.streetName;
    this.shelter.address.houseNumber = shelterForm.value.houseNumber;
    this.shelter.address.flatNumber = shelterForm.value.flatNumber;
    this.shelter.address.city = shelterForm.value.city;
    this.shelter.address.zipCode = shelterForm.value.zipCode;
    this.shelter.status = shelterForm.value.status;
    this.shelter.websiteUrl = shelterForm.value.websiteUrl;
    this.shelter.facebookUrl = shelterForm.value.facebookUrl;
    this.shelter.instagramUrl = shelterForm.value.instagramUrl;
    this.shelter.twitterUrl = shelterForm.value.twitterUrl;
    this.shelterCache.update(this.shelter);
  }
  
  onDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz to schronisko z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.shelterService.deleteShelter(this.shelter);
        this.appRouter.navigate(['/shelters']);
      }
    })
  }

  onGoBack(): void {
    this.location.back;
  }

  goToDetails(shelter: Shelter): void {
    this.appRouter.navigate(["/shelter/", shelter.id]);
  }

  getStreetAddress(): string {
    if(this.shelterAddress.flatNumber) {
        return this.shelterAddress.streetName + ' ' + this.shelterAddress.houseNumber 
        + '/' + this.shelterAddress.flatNumber;
    }
    return this.shelterAddress.streetName + ' ' + this.shelterAddress.houseNumber;
}
}
