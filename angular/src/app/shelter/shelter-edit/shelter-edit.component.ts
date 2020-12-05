import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Shelter} from "../shelter-shared/shelter";
import {ShelterService} from "../shelter-shared/shelter.service";


@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-edit.component.html',
  styleUrls: ['./shelter-edit.component.css']
})
export class ShelterEditComponent implements OnInit {
  shelterForm: FormGroup;

  constructor(private shelterService: ShelterService) { }

  ngOnInit() {
    this.onInit();
  }

  onSubmit(shelterForm: NgForm) {
    const newShelter = new Shelter(
      shelterForm.value.name,
      shelterForm.value.phoneNumber,
      shelterForm.value.email,
      shelterForm.value.nip,
      shelterForm.value.regon,
      shelterForm.value.streetName,
      shelterForm.value.houseNumber,
      shelterForm.value.flatNumber,
      shelterForm.value.city,
      shelterForm.value.zipCode,
      shelterForm.value.description
    )

    this.shelterService.addShelter(newShelter);

  }

  onInit() {
    this.shelterForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      nip: new FormControl(null, Validators.required),
      regon: new FormControl(null, Validators.required),
      streetName: new FormControl(null, Validators.required),
      houseNumber: new FormControl(null, Validators.required),
      flatNumber: new FormControl(null),
      city: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });
  }

}
