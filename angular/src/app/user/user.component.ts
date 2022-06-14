import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../security/authentication.service';
import { RoleEnum } from '../enum/role.enum';
import { Subscription, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import { UserService } from './user-service.service';
import { NotificationService } from '../notification/notification.service';
import { NotificationType } from '../enum/notification-type.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WalkService } from '../pet/pet-shared/walk-service';
import { Walk } from '../pet/pet-shared/walk';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private titleSubject = new BehaviorSubject<string>('ManagerWalks');
  public titleAction$ = this.titleSubject.asObservable();
  public users: User[];
  public user: User;
  public refreshing: boolean;
  public selectedUser: User;
  public fileName: string;
  public profileImage: File;
  private subscriptions: Subscription[] = [];
  public editUser = new User();
  private currentUsername: string;
  public walks: Walk[];

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private notificationService: NotificationService,
    private walkService: WalkService) {}

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    this.getUsers(true);
    this.getWalks();
  }

  public changeTitle(title: string): void {
    this.titleSubject.next(title);
  }

  public getUsers(showNotification: boolean): void {
    this.refreshing = true;
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          this.userService.addUsersToLocalCache(response);
          this.users = response;
          this.refreshing = false;
          if (showNotification) {
            this.sendNotification(NotificationType.SUCCESS, `${response.length} user(s) loaded successfully.`);
          }
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        }
      )
    );
  }

  public getWalks() {
    if(this.getUserRole() === RoleEnum.MANAGER) {
      this.walkService.getWalksForShelter(this.user.shelterId).subscribe(
        response => {
          this.walks = response;
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        }
      );
    } else {
      this.walkService.getWalksForUser(this.user.id).subscribe(
        response => {
          this.walks = response;
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        }
      )
    }
  }

  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
    this.sendNotification(NotificationType.SUCCESS, `You've been successfully logged out`);
  }

  public isAdmin(): boolean {
    return this.getUserRole() === RoleEnum.SUPER_ADMIN
  }

  public isManager(): boolean {
    return this.getUserRole() === RoleEnum.MANAGER;
  }

  public isAdminOrManager(): boolean {
    return this.isAdmin() || this.isManager();
  }

  public isUser(): boolean {
    return this.getUserRole() === RoleEnum.USER;

  }

  private getUserRole(): string {
    return this.authenticationService.getUserFromLocalCache().role;
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

  private clickButton(buttonId: string): void {
    document.getElementById(buttonId).click();
  }

  public onAcceptWalk(walk: Walk): void {
    this.walkService.confirmWalk(walk.id);
  }

  public onCancelWalk(walk: Walk): void {
    this.walkService.cancelWalk(walk.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  processDate(date: Date) {
    const regex = /./i;
    return date.toString().replace(',', '/').replace(',', '/').replace(',', ' ').replace(',0', ':00');
  }
}
