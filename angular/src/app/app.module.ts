import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ShelterComponent } from "./shelter/shelter.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ShelterListComponent } from "./shelter/shelter-list/shelter-list.component";
import { ShelterDetailsComponent } from "./shelter/shelter-details/shelter-details.component";
import { ShelterItemComponent } from "./shelter/shelter-list/shelter-item/shelter-item.component";
import { ShelterService } from "./shelter/shelter-shared/shelter.service";
import { PetListComponent } from "./pet/pet-list/pet-list.component";
import { PetDetailsComponent } from "./pet/pet-details/pet-details.component";
import { PetNewComponent } from "./pet/pet-new/pet-new.component";
import { AllPetListComponent } from "./pet/all-pet-list/all-pet-list.component";
import { NgxPaginationModule } from "ngx-pagination";
import { UserService } from "./user/user-service.service";
import { AuthInterceptor } from "./security/interceptor/auth.interceptor";
import { AuthenticationGuard } from "./security/guard/authentication.guard";
import { NotificationModule } from './notifiaction.module';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { MustMatchDirective } from './security/register/helper/must-match.directive';
import { PetListItemComponent } from './pet/pet-list-item/pet-list-item.component';
import { PetDetailsEditComponent } from './pet/pet-details-edit/pet-details-edit.component';
import { AllTakerListComponent } from './taker/all-taker-list/all-taker-list.component';
import { TakerService } from './taker/taker-shared/taker-service';
import { TakerListComponent } from './taker/taker-list/taker-list.component';
import { TakerDetailsComponent } from './taker/taker-details/taker-details.component';
import { TakerDetailsEditComponent } from './taker/taker-details-edit/taker-details-edit.component';
import { WalkAppointmentComponent } from './pet/walk-appointment/walk-appointment.component';
import { TakerNewComponent } from './taker/taker-new/taker-new.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FooterComponent } from './footer/footer.component';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ShelterNewComponent } from './shelter/shelter-new/shelter-new.component';
import { ShelterEditComponent } from './shelter/shelter-edit/shelter-edit.component';
import { PaymentComponent } from './pet/payment/payment.component';
import { UserComponent } from './user/user.component';
import { ResetPasswordComponent } from './security/reset-password/reset-password.component';
import { ShelterCache } from './shelter/shelter-shared/shelter-cache.service';
import { PetCache } from './pet/pet-shared/pet-cache.service';
import { TakerCache } from './taker/taker-shared/taker-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShelterComponent,
    ShelterNewComponent,
    ShelterEditComponent,
    ShelterListComponent,
    ShelterDetailsComponent,
    ShelterItemComponent,
    PetListComponent,
    PetDetailsComponent,
    PetNewComponent,
    AllPetListComponent,
    LoginComponent,
    RegisterComponent,
    MustMatchDirective,
    PetListItemComponent,
    PetDetailsEditComponent,
    AllTakerListComponent,
    TakerListComponent,
    TakerDetailsComponent,
    TakerDetailsEditComponent,
    WalkAppointmentComponent,
    TakerNewComponent,
    FooterComponent,
    ConfirmDialogComponent,
    PaymentComponent,
    UserComponent,
    ResetPasswordComponent
  ],
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NotificationModule,
    FormsModule,
    CalendarModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MdbModalModule
    ],
  providers: [
    AuthenticationGuard,
    ShelterService,
    UserService,
    TakerService,
    ShelterCache,
    PetCache,
    TakerCache,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
