import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NotificationService } from 'src/app/notification/notification.service';
import { User } from 'src/app/user/user';
import { Subscription } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/http';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { HeaderType } from 'src/app/header/header-type.enum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  showLoading: boolean;
  private subscriptions: Subscription[]= [];

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService, 
    private notificationService: NotificationService, 
    private location: Location) 
    { }

  ngOnInit(): void {
    if(this.authenticationService.isLoggedIn()) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

  onLogin(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: HttpResponse<User>) => {
          const token = response.headers.get(HeaderType.JWT_TOKEN);
          this.authenticationService.saveToken(token);
          this.authenticationService.addUserToLocalCache(response.body);
          this.router.navigateByUrl("/shelters");
        },
        (error: HttpErrorResponse) => {
          this.sendErrorNotification(NotificationType.ERROR, error.error.message);
          this.showLoading = false;
        }
      )
    )
  }

  onResetPassword(): void {
    this.router.navigate(['/reset-password']);

  }

  private sendErrorNotification(notificationType: NotificationType, message: string): any {
    if(message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'Wystąpił błąd. Spróbuj ponownie.');
    }
  }
}
