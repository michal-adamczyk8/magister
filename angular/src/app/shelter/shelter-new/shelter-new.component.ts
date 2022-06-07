import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Shelter } from "../shelter-shared/shelter";
import { ShelterService } from "../shelter-shared/shelter.service";
import { Router } from "@angular/router";
import { CustomValidators } from "src/app/validators/custom-validators";
import { Location } from "@angular/common";
import { ShelterAddress } from '../shelter-shared/shelter-addres';
import { NotificationService } from 'src/app/notification/notification.service';
import { NotificationType } from 'src/app/enum/notification-type.enum';

@Component({
  selector: "app-shelter-new",
  templateUrl: "./shelter-new.component.html",
  styleUrls: ["./shelter-new.component.css"]
})
export class ShelterNewComponent implements OnInit {
  shelterForm: FormGroup;

  constructor(
    private shelterService: ShelterService,
    private appRouter: Router,
    private location: Location,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.onInit();
  }

  onSubmit(shelterForm: NgForm) {
    if (this.shelterForm.invalid) {
      this.shelterForm.markAllAsTouched();
      return;
    }
    const newShelterAddress = new ShelterAddress(
      null,
      null,
      shelterForm.value.streetName,
      shelterForm.value.houseNumber,
      shelterForm.value.flatNumber,
      shelterForm.value.city,
      shelterForm.value.zipCode
    );
    const newShelter = new Shelter(
      null,
      shelterForm.value.name,
      shelterForm.value.phoneNumber,
      shelterForm.value.email,
      shelterForm.value.nip,
      shelterForm.value.regon,
      shelterForm.value.krs,
      shelterForm.value.description,
      shelterForm.value.logo,
      shelterForm.value.websiteUrl,
      shelterForm.value.facebookUrl,
      shelterForm.value.twitterUrl,
      shelterForm.value.instagramUrl,
      shelterForm.value.bankAccount,
      shelterForm.value.swiftCode,
      shelterForm.value.openingTime,
      null,
      newShelterAddress
    );
    this.shelterService.addShelter(newShelter);
    this.notificationService.notify(NotificationType.SUCCESS, "Schronisko zostało pomyslnie dodane.")
    this.appRouter.navigate(["/shelters"]);
  }

  onInit() {
    this.shelterForm = new FormGroup({
      name: new FormControl(null, [
        Validators.minLength(3),
      ]),
      phoneNumber: new FormControl(null, [
        Validators.minLength(3)
      ]),
      email: new FormControl(null, [
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+\\.[a-z]{2,15}$")
      ]),
      nip: new FormControl(null, [
        CustomValidators.exactLength(10)
      ]),
      regon: new FormControl(null, [
        CustomValidators.exactTwoLengths(9, 14)
      ]),
      krs: new FormControl(null),
      streetName: new FormControl(null, [
        Validators.minLength(3)
      ]),
      houseNumber: new FormControl(null),
      flatNumber: new FormControl(null),
      city: new FormControl(null, [
        Validators.minLength(3)
      ]),
      zipCode: new FormControl(null, [
        CustomValidators.notOnlyWhitespace,
        Validators.pattern("[0-9]{2}-[0-9]{3}")
      ]),
      description: new FormControl(null),
      websiteUrl: new FormControl(null),
      facebookUrl: new FormControl(null),
      instagramUrl: new FormControl(null),
      twitterUrl: new FormControl(null),
      openingTime: new FormControl(null),
      bankAccount: new FormControl(null),
      swiftCode: new FormControl(null),
      logo: new FormControl(null)
    });
  }

  onGoBack() {
      this.location.back();
  }

  get name() {
    return this.shelterForm.get("name");
  }

  get phoneNumber() {
    return this.shelterForm.get("phoneNumber");
  }

  get email() {
    return this.shelterForm.get("email");
  }

  get nip() {
    return this.shelterForm.get("nip");
  }

  get regon() {
    return this.shelterForm.get("regon");
  }

  get streetName() {
    return this.shelterForm.get("streetName");
  }

  get houseNumber() {
    return this.shelterForm.get("houseNumber");
  }

  get city() {
    return this.shelterForm.get("city");
  }

  get zipCode() {
    return this.shelterForm.get("zipCode");
  }

  get websiteUrl() {
    return this.shelterForm.get("websiteUrl");
  }

  get bankAccount() {
    return this.shelterForm.get("bankAccount");
  }
}
