import {Component, OnInit, AfterViewChecked} from '@angular/core';
import { UserService } from '../user/user-service.service';
import { AuthenticationService } from '../security/authentication.service';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';
import { NotificationType } from '../enum/notification-type.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

    isUserLoggedIn: boolean;
    constructor(
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.isUserLoggedIn = this.authenticationService.isLoggedIn();
    }

    ngAfterViewChecked(): void {
        this.isUserLoggedIn = this.authenticationService.isLoggedIn();
    }

    onLogout() {
        this.authenticationService.logOut();
        this.router.navigate(['/shelters']);
        this.notificationService.notify(NotificationType.SUCCESS, `Zostałeś pomyślnie wylogowany`);
    }
}
