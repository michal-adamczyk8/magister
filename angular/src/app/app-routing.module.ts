import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ShelterListComponent } from './shelter/shelter-list/shelter-list.component';
import { ShelterDetailsComponent } from './shelter/shelter-details/shelter-details.component';
import { PetNewComponent } from './pet/pet-new/pet-new.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { AllPetListComponent } from './pet/all-pet-list/all-pet-list.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { PetDetailsEditComponent } from './pet/pet-details-edit/pet-details-edit.component';
import { AllTakerListComponent } from './taker/all-taker-list/all-taker-list.component';
import { TakerDetailsComponent } from './taker/taker-details/taker-details.component';
import { TakerDetailsEditComponent } from './taker/taker-details-edit/taker-details-edit.component';
import { WalkAppointmentComponent } from './pet/walk-appointment/walk-appointment.component';
import { ShelterEditComponent } from './shelter/shelter-edit/shelter-edit.component';
import { ShelterNewComponent } from './shelter/shelter-new/shelter-new.component';
import { PaymentComponent } from './pet/payment/payment.component';
import { UserComponent } from './user/user.component';
import { TakerNewComponent } from './taker/taker-new/taker-new.component';
import { ResetPasswordComponent } from './security/reset-password/reset-password.component';

const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "reset-password", component: ResetPasswordComponent },
    { path: "shelters", component: ShelterListComponent },
    { path: "shelters/new", component: ShelterNewComponent },
    { path: "shelter/:shelterId", component: ShelterDetailsComponent },
    { path: "shelter/details/edit/:shelterId", component: ShelterEditComponent},
    { path: "shelter/:shelterId/pets/new", component: PetNewComponent },
    { path: "shelter/:shelterId/pets/:petId", component: PetDetailsComponent },
    { path: "shelter/pets/:shelterId/:page/:size", component: PetListComponent },
    { path: "pets", component: AllPetListComponent },
    { path: "pets/new", component: PetNewComponent },
    { path: "pets/details/:petId", component: PetDetailsComponent},
    { path: "pets/details/edit/:petId", component: PetDetailsEditComponent},
    { path: "takers", component: AllTakerListComponent},
    { path: "takers/new", component: TakerNewComponent},
    { path: "takers/shelter/:shelterId", component: AllTakerListComponent},
    { path: "takers/details/:takerId", component: TakerDetailsComponent},
    { path: "takers/details/edit/:takerId", component: TakerDetailsEditComponent},
    { path: "takers/pets/:takerId/:page/:size", component: PetListComponent },
    { path: "pet/walk/:petId", component: WalkAppointmentComponent },
    { path: "pet/payment", component: PaymentComponent},
    { path: "users", component: UserComponent},
    { path: "", redirectTo: "/shelters", pathMatch: "full" }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
