import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../enum/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notfier: NotifierService) { }

  public notify(type: NotificationType, message: string) {
    this.notfier.notify(type, message);
  }
}