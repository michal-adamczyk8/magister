import {Component, OnInit} from '@angular/core';
import {TakerService} from '../taker-shared/taker-service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import {CustomValidators} from 'src/app/validators/custom-validators';
import {NotificationService} from 'src/app/notification/notification.service';
import {NotificationType} from 'src/app/enum/notification-type.enum';
import {AuthenticationService} from 'src/app/security/authentication.service';
import {NewTakerRequest} from '../taker-shared/new-taker-request';
import {TakerCache} from '../taker-shared/taker-cache.service';
import {Taker} from '../taker-shared/taker';

@Component({
    selector: 'app-taker-new',
    templateUrl: './taker-new.component.html',
    styleUrls: ['./taker-new.component.css']
})
export class TakerNewComponent implements OnInit {

    takerForm: FormGroup;
    shelterId: number;

    constructor(
        private takerService: TakerService,
        private appRouter: Router,
        private location: Location,
        private notificationService: NotificationService,
        private authService: AuthenticationService,
    ) {
    }

    ngOnInit(): void {
        this.initFormGroup();
        this.shelterId = this.authService.getLoggedUserShelterId();

    }

    initFormGroup(): void {
        this.takerForm = new FormGroup({
            firstName: new FormControl(null, [
                Validators.minLength(3),
                CustomValidators.notOnlyWhitespace
            ]),
            lastName: new FormControl(null, [
                Validators.minLength(3),
                CustomValidators.notOnlyWhitespace
            ]),
            email: new FormControl(null, [
                Validators.minLength(3),
            ]),
            phoneNumber: new FormControl(null, [
                Validators.minLength(3),
            ]),
            imageUrl: new FormControl(null, [
                Validators.required
            ]),
        });
    }


    onSubmit(takerForm: NgForm) {
        if (this.takerForm.invalid) {
            this.takerForm.markAllAsTouched();
            return;
        }
        const newTaker = new NewTakerRequest(
            takerForm.value.firstName,
            takerForm.value.lastName,
            takerForm.value.email,
            takerForm.value.phoneNumber,
            takerForm.value.imageUrl,
            this.shelterId);

        this.takerService.addTaker(newTaker);
        this.notificationService.notify(NotificationType.SUCCESS, 'Opiekun został pomyślnie dodany.');
        this.location.back();
    }

    onGoBack() {
        this.location.back();
    }

    get firstName() {
        return this.takerForm.get('firstName');
    }

    get lastName() {
        return this.takerForm.get('lastName');
    }

    get email() {
        return this.takerForm.get('email');
    }

    get phoneNumber() {
        return this.takerForm.get('phoneNumber');
    }

    get imageUrl() {
        return this.takerForm.get('imageUrl');
    }
}
