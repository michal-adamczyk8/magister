import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {CustomValidators} from 'src/app/validators/custom-validators';
import {PetService} from 'src/app/pet/pet-shared/pet-service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotificationService} from 'src/app/notification/notification.service';
import {NotificationType} from 'src/app/enum/notification-type.enum';
import {AuthenticationService} from 'src/app/security/authentication.service';


@Component({
    selector: 'app-pet-new',
    templateUrl: './pet-new.component.html',
    styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
    shelterId: number;
    petForm: FormGroup;
    petTypes: string[];
    petSexes: string[];
    petStatuses: string[];

    constructor(
        private petService: PetService,
        private appRouter: Router,
        private location: Location,
        private notificationService: NotificationService,
        private authService: AuthenticationService
    ) {
    }

    ngOnInit() {
        this.petTypes = this.petService.getPetTypeValues();
        this.petSexes = this.petService.getPetSexValues();
        this.petStatuses = this.petService.getPetStatusValues();
        this.shelterId = this.authService.getLoggedUserShelterId();
        this.onInit();
    }

    onInit() {
        this.petForm = new FormGroup({
            name: new FormControl(null, [Validators.minLength(3), CustomValidators.notOnlyWhitespace]),
            raceType: new FormControl(null),
            type: new FormControl(null, Validators.required),
            sex: new FormControl(null, Validators.required),
            birthYear: new FormControl(null),
            birthMonth: new FormControl(null),
            weight: new FormControl(null, Validators.required),
            admittanceDate: new FormControl(null, Validators.required),
            description: new FormControl(null),
            foundPlace: new FormControl(null),
            status: new FormControl(null, Validators.required),
            imageUrl: new FormControl(null, null)
        });
    }

    onSubmit(petForm: NgForm) {
        if (petForm.invalid) {
            this.petForm.markAllAsTouched();
            return;
        }
        this.petService.addPet(this.petForm, this.shelterId);
        this.notificationService.notify(NotificationType.SUCCESS, 'Zwierzak został pomyślnie dodany.');
        this.location.back();
    }

    onGoBack() {
        this.petForm.reset();
        this.location.back();
    }

    get name() {
        return this.petForm.get('name');
    }

    get raceType() {
        return this.petForm.get('raceType');
    }

    get type() {
        return this.petForm.get('type');
    }

    get sex() {
        return this.petForm.get('sex');
    }

    get birthYear() {
        return this.petForm.get('birthYear');
    }

    get birthMonth() {
        return this.petForm.get('birthMonth');
    }

    get weight() {
        return this.petForm.get('weight');
    }

    get admittanceDate() {
        return this.petForm.get('admittanceDate');
    }

    get description() {
        return this.petForm.get('description');
    }

    get foundPlace() {
        return this.petForm.get('foundPlace');
    }

    get status() {
        return this.petForm.get('status');
    }

    get imageUrl() {
        return this.petForm.get('imageUrl');
    }
}