import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Shelter} from '../shelter-shared/shelter';
import {ShelterService} from '../shelter-shared/shelter.service';
import {ShelterAddress} from '../shelter-shared/shelterAddress';
import {Router} from '@angular/router';


@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-new.component.html',
  styleUrls: ['./shelter-new.component.css']
})
export class ShelterEditComponent implements OnInit {
  shelterForm: FormGroup;

  constructor(private shelterService: ShelterService, private appRouter: Router) { }

  ngOnInit() {
    this.onInit();
  }

  onSubmit(shelterForm: NgForm) {
    const shelterAddress = new ShelterAddress(
        shelterForm.value.streetName,
        shelterForm.value.houseNumber,
        shelterForm.value.flatNumber,
        shelterForm.value.city,
        shelterForm.value.zipCode
    );
    const newShelter = new Shelter(
      shelterForm.value.name,
      shelterForm.value.phoneNumber,
      shelterForm.value.email,
      shelterForm.value.nip,
      shelterForm.value.regon,
      shelterAddress,
      shelterForm.value.description,
      shelterForm.value.logo
    );
    console.log(newShelter);
    this.shelterService.addShelter(newShelter);
    this.appRouter.navigate(['/shelters']);
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
      description: new FormControl(null),
      logo: new FormControl(null)
    });
  }

}
