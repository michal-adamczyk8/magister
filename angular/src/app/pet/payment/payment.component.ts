import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {NotificationService} from '../../notification/notification.service';
import {NotificationType} from '../../enum/notification-type.enum';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private location: Location,
              private notificationService: NotificationService) { }

  onContinue() {
    this.notificationService.notify(NotificationType.SUCCESS, "Pomyślnie przetworzono płatność");
    this.location.back();
  }

}
