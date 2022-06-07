import { Component, OnInit } from '@angular/core';
import { Taker } from '../taker-shared/taker';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { TakerService } from '../taker-shared/taker-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TakerStatusEnum } from 'src/app/enum/taker-status.enum';
import { NotificationService } from 'src/app/notification/notification.service';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TakerCache } from '../taker-shared/taker-cache.service';

@Component({
  selector: 'app-taker-details-edit',
  templateUrl: './taker-details-edit.component.html',
  styleUrls: ['./taker-details-edit.component.css']
})
export class TakerDetailsEditComponent implements OnInit {
  taker: Taker;
  takerId: number;
  takerForm: FormGroup;
  takerStatus = TakerStatusEnum;
  takerStatusEnumValues = [];
  page = 0;
  size = 10;
  
  constructor(
    private takerService: TakerService,
    private route: ActivatedRoute,
    private location: Location,
    private appRouter: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private takerCacheService: TakerCache
    ) { 
      this.takerStatusEnumValues = Object.values(this.takerStatus)
    }

  ngOnInit(): void {
    this.getCurrentTaker();
  }

  getTakerId(): void {
    this.takerId = +this.route.snapshot.paramMap.get('takerId');
  }

  getCurrentTaker(): void {
    this.getTakerId();
    this.takerService.getSingleTaker(this.takerId).subscribe(
      (response: Taker) => {
        this.taker = response;
        this.onInitFormGroup(response);
      }
    )
  }

  onInitFormGroup(taker: Taker): void {
    this.takerForm = new FormGroup({
      firstName: new FormControl(taker.firstName),
      lastName: new FormControl(taker.lastName),
      email: new FormControl(taker.email),
      phoneNumber: new FormControl(taker.phoneNumber),
      imageUrl: new FormControl(taker.imageUrl),
      status: new FormControl(taker.status)
    })
  }

  onSaveChanges(takerForm: NgForm): void {
    if(this.takerForm.invalid) {
      this.takerForm.markAllAsTouched();
      return;
    }
    this.editTaker(takerForm);
    this.takerService.saveEditedTaker(this.taker);
    this.notificationService.notify(NotificationType.SUCCESS, "Opiekun został pomyslnie zaktualizowany.")
    this.goToDetails(this.taker)
  }

  editTaker(takerForm: NgForm): void {
    this.taker.firstName = takerForm.value.firstName;
    this.taker.lastName = takerForm.value.lastName;
    this.taker.email = takerForm.value.email;
    this.taker.phoneNumber = takerForm.value.phoneNumber;
    this.taker.imageUrl = takerForm.value.imageUrl;
    this.taker.status = takerForm.value.status;
    this.takerCacheService.update(this.taker);
  }

  onGoBack() {
    this.location.back();
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz tego opiekuna z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.takerService.deleteTaker(this.taker);
        this.appRouter.navigate(['/takers']);
      }
    })
  }

  goToDetails(taker: Taker) {
    this.appRouter.navigate(['takers/details', taker.id]);
  }

  onNavToPetList() {
    this.appRouter.navigate(['takers/pets/', this.takerId, this.page, this.size]);
  }
}
