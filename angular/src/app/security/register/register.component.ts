import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { NotificationService } from "src/app/notification/notification.service";
import { User } from "src/app/user/user";
import { Subscription } from "rxjs";
import { NotificationType } from "src/app/enum/notification-type.enum";
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  showLoading: boolean;
  private subscriptions: Subscription[] = [];
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.location.back();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

  onRegister(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.register(user).subscribe(
        (response: User) => {
          this.showLoading = false;
          this.sendNotification(
            NotificationType.SUCCESS,
            `Nowe konto zostało zarejestrowane dla użytkownika ${response.username}.`
          );
          this.router.navigateByUrl("/login");
        },
        (error: any) => {
          this.sendNotification(NotificationType.ERROR, error.error.message);
          this.showLoading = false;
        }
      )
    );
  }

  private sendNotification(
    notificationType: NotificationType,
    message: string
  ): any {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        "Wystąpił błąd. Proszę spróbuj ponownie"
      );
    }
  }
}
