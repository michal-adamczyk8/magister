import { Component, OnDestroy, OnInit, AfterViewChecked } from "@angular/core";
import { Shelter } from "../shelter-shared/shelter";
import { ShelterService } from "../shelter-shared/shelter.service";
import { Router, NavigationExtras } from "@angular/router";
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { User } from 'src/app/user/user';

@Component({
  selector: "app-shelter-list",
  templateUrl: "./shelter-list.component.html",
  styleUrls: ["./shelter-list.component.css"]
})
export class ShelterListComponent implements OnInit {
  shelters: Shelter[];
  shelter: Shelter;
  user: User;
  isManagerOrAdmin: boolean;
  isManager: boolean;

  constructor(
    private shelterService: ShelterService,
    private appRouter: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService,
    
  ) {}

  ngOnInit() {
    this.shelterService.getAllShelters().subscribe(response => {
      this.shelters = response;
    });
    this.user = this.authService.getUserFromLocalCache();
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
    this.isManager = this.authService.isLoggedUserManager();
  }

  onNavToDetails(shelter: Shelter): void {
    let navigationExtras: NavigationExtras = {
      state: {
        shelter: this.shelter
      }
    };
    this.appRouter.navigate(["/shelter", shelter.id], navigationExtras);
  }

  onNavToEdit(shelter: Shelter): void {
    let navigationExtras: NavigationExtras = {
      state: {
        shelter: this.shelter
      }
    };
    this.appRouter.navigate(["shelter/details/edit", shelter.id], navigationExtras);
  }

  onDelete(shelter: Shelter): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz to schronisko z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.shelterService.deleteShelter(shelter);
        this.appRouter.navigate(['/shelters']);

      }
    })
  }

  onAddNewShelter(): void {
    this.appRouter.navigate(["/shelters/new"]);
  }
  
}
