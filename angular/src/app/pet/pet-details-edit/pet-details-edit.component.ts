import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PetService } from "src/app/pet/pet-shared/pet-service";
import { Pet } from "src/app/pet/pet-shared/pet";
import { Location } from "@angular/common";
import { PetStatusEnum } from "src/app/enum/pet-status.enum";
import { PetSexEnum } from "src/app/enum/pet-sex.enum";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { Taker } from "src/app/taker/taker-shared/taker";
import { TakerService } from "src/app/taker/taker-shared/taker-service";
import { Shelter } from "src/app/shelter/shelter-shared/shelter";
import { NotificationService } from 'src/app/notification/notification.service';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { PetCache } from 'src/app/pet/pet-shared/pet-cache.service';

@Component({
  selector: "app-pet-details-edit",
  templateUrl: "./pet-details-edit.component.html",
  styleUrls: ["./pet-details-edit.component.css"]
})
export class PetDetailsEditComponent implements OnInit {
  pet: Pet;
  petId: number;
  takers: Taker[] = [];
  petStatus = PetStatusEnum;
  petSex = PetSexEnum;
  statusEnumValues = [];
  sexEnumValues = [];
  petForm: FormGroup;
  unassignedTakers: Taker[];
  shelter: Shelter;
  doShowTakers: boolean = false;

  ngOnInit(): void {
    this.getCurrentPet();
  }

  constructor(
    private petService: PetService,
    private takerService: TakerService,
    private route: ActivatedRoute,
    private location: Location,
    private appRouter: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private petCacheService: PetCache
  ) {
    this.statusEnumValues = Object.values(this.petStatus);
    this.sexEnumValues = Object.values(this.petSex);
  }

  showTakers() {
    if (this.doShowTakers === true) {
      this.doShowTakers = false;
    } else {
      this.getUnassignedTakers();
      this.doShowTakers = true;
    }
  }

  getPetId(): void {
    this.petId = +this.route.snapshot.paramMap.get("petId");
  }

  getCurrentPet(): void {
    this.getPetId();
    this.petService.getSinglePet(this.petId).subscribe((response: Pet) => {
      this.pet = response;
      this.takers = response.takers;
      this.shelter = response.shelter;
      this.onInitFormGroup(response);
    });
  }

  getUnassignedTakers() {
    this.takerService
      .getUnassignedTakersForPet(this.shelter.id, this.pet.id)
      .subscribe((response: Taker[]) => {
        this.unassignedTakers = response;
        console.log(response.length);
      });
  }

  onInitFormGroup(pet: Pet): void {
    this.petForm = new FormGroup({
      name: new FormControl(pet.name),
      raceType: new FormControl(pet.raceType),
      type: new FormControl(pet.type),
      sex: new FormControl(pet.sex),
      birthYear: new FormControl(pet.birthYear),
      birthMonth: new FormControl(pet.birthMonth),
      weight: new FormControl(pet.weight),
      admittanceDate: new FormControl(pet.admittanceDate),
      description: new FormControl(pet.description),
      foundPlace: new FormControl(pet.foundPlace),
      status: new FormControl(pet.status)
    });
  }

  onSaveChanges(petForm: NgForm): void {
    if (this.petForm.invalid) {
      this.petForm.markAllAsTouched();
      return;
    }
    this.editPet(petForm);
    this.petService.saveEditedPet(this.pet);
    this.notificationService.notify(NotificationType.SUCCESS, "Zwierzak został pomyślnie zaktualizowany.")
    this.goToDetails(this.pet);
  }

  editPet(petForm: NgForm): void {
    this.pet.type = petForm.value.type;
    this.pet.description = petForm.value.description;
    this.pet.admittanceDate = petForm.value.admittanceDate;
    this.pet.sex = petForm.value.sex;
    this.pet.foundPlace = petForm.value.foundPlace;
    this.pet.weight = petForm.value.weight;
    this.pet.birthYear = petForm.value.birthYear;
    this.pet.birthMonth = petForm.value.birthMonth;
    this.pet.status = petForm.value.status;
    this.pet.name = petForm.value.name;
    this.pet.raceType = petForm.value.raceType;
    this.petCacheService.update(this.pet);
  }

  onDelete(): void {
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

  onGoBack(): void {
    this.location.back();
  }

  goToDetails(pet: Pet): void {
    this.appRouter.navigate(["pets/details", pet.id]);
  }
}
