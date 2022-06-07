import { Component, OnInit } from "@angular/core";
import { WalkService } from 'src/app/pet-shared/walk-service';
import { Pet } from 'src/app/pet-shared/pet';
import { User } from 'src/app/user/user';
import { PetService } from 'src/app/pet-shared/pet-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification/notification.service';
import { NotificationType } from 'src/app/enum/notification-type.enum';

@Component({
  selector: "app-walk-appointment",
  templateUrl: "./walk-appointment.component.html",
  styleUrls: ["./walk-appointment.component.css"]
})
export class WalkAppointmentComponent implements OnInit {
  pet: Pet;
  petId: number;
  user: User;
  public minDate: Date = new Date();
  selectedDate: Date;
  showErr = false;
  savedTime: string;
  finalObj = [];
  morningtime = [{time: "08:00"},{time: "10:00"},{time: "12:00"}];
  afternoontime = [{time: "14:00"},{time: "16:00"},{ time: "18:00"}];
  eveningtime = [{time: "20:00"}];
  constructor (
    private walkService: WalkService,
    private petService: PetService,
    private route: ActivatedRoute,
    private appRouter: Router,
    private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.getCurrentPet();
  }

  ScheduleEvent = data => {
    this.selectedDate = data.value;
    const a = document.getElementById("schModel");
    a.click();
  };

  SaveTime = (time, item) => {
    this.savedTime = time;
    this.showErr = false;
  };

  confirmSch = () => {
    console.log("this is ", this.selectedDate);
    if (this.savedTime !== undefined) {
      const a = document.getElementById("cls");
      a.click();
      const obj = {
        time: this.savedTime,
        date: this.selectedDate
      };
      this.finalObj.push(obj);
      console.log("this is final ", this.finalObj);
    } else {
      this.showErr = true;
    }
  };


  getPetId() {
    this.petId = +this.route.snapshot.paramMap.get('petId');
  }

  getCurrentPet() {
    this.getPetId();
    this.petService.getSinglePet(this.petId).subscribe(
      (response: Pet) => {
        this.pet = response;
      }
    );
  }

  onConfirmScheduling() {
    this.walkService.scheduleWalk(this.processDate(), this.petId, 1);
    this.notificationService.notify(NotificationType.SUCCESS, "Udało się umówić na spotkanie, czeka ono na akceptację administraotra.")
    this.appRouter.navigate(["/pets/details/", this.petId]);
  }

  processDate(): Date {
    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth();
    const day = this.selectedDate.getDate();
    const hours = this.savedTime.split(':')[0];
    return new Date(year, month, day, parseInt(hours)); 
  }
}
