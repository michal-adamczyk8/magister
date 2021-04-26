import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { Pet } from 'src/app/pet-shared/pet';
import { Shelter } from 'src/app/shelter/shelter-shared/shelter';
import { PetService } from 'src/app/pet-shared/pet-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  shelterId: number;
  petForm: FormGroup;
  petTypes: string[] = ['Kot', 'Pies'];
  petSexes: string[] = ['Pies', 'Suka', 'Kot', 'Kocica'];
  petStatuses: string[] = ['GOTOWY DO ADOPCJI', 'GOTOWY DO ADOPCJI Z DOMU TYMCZASOWEGO', 'ADOPTOWANY', 'DO PILNEJ ADOPCJI', 'NIEAKTUALNY', 'PRZYGOTOWYWANY DO ADOPCJI'];

  constructor(private petService: PetService, private appRouter: Router) { }

  ngOnInit() {
    this.shelterId = history.state.data;
    this.onInit();
  }

  onInit() {
    this.petForm = new FormGroup({
      name: new FormControl(null, [Validators.minLength(3), CustomValidators.notOnlyWhitespace]),
      raceType: new FormControl(null, CustomValidators.notOnlyWhitespace),
      type: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      birthYear: new FormControl(null, Validators.required),
      birthMonth: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      admittanceDate: new FormControl(null),
      description: new FormControl(null, CustomValidators.notOnlyWhitespace),
      foundPlace: new FormControl(null),
      shelterId: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    })
  }

  onSubmit(petForm: NgForm) {
    // if(this.petForm.invalid) {
    //   this.petForm.markAllAsTouched();
    //   return;
    // }
    const newPet = new Pet(
      null,
      petForm.value.type,
      petForm.value.name,
      petForm.value.sex,
      petForm.value.raceType,
      petForm.value.birthYear,
      petForm.value.birthMonth,
      petForm.value.weight,
      petForm.value.admittanceDate,
      petForm.value.description,
      petForm.value.foundPlace,
      this.shelterId,
      petForm.value.status
    )
    this.petService.addPet(newPet);
    this.appRouter.navigate(['/shelter/' + this.shelterId + '/pets']);
  }
}
