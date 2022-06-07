import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NotificationService } from 'src/app/notification/notification.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user/user';
import { Location } from '@angular/common';
import { NotificationType } from 'src/app/enum/notification-type.enum';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private subscriptions: Subscription[]= [];
  showLoading: boolean;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService, 
    private notificationService: NotificationService) 
    { }

  ngOnInit(): void {
  }

  onResetPassword(user: User) {
    console.log('reset-password')
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.resetPassword(user).subscribe(
        (response: User) => {
          this.showLoading = false;
          this.sendNotification(
            NotificationType.SUCCESS,
            `Hasło zostało zmienione`
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }
}
