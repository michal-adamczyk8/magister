import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Taker } from '../taker-shared/taker';
import { Shelter } from 'src/app/shelter/shelter-shared/shelter';
import { TakerService } from '../taker-shared/taker-service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { TakerCache } from '../taker-shared/taker-cache.service';


@Component({
  selector: 'app-taker-details',
  templateUrl: './taker-details.component.html',
  styleUrls: ['./taker-details.component.css']
})
export class TakerDetailsComponent implements OnInit {
  taker: Taker;
  shelter: Shelter;
  takerId: number;

  private page = 0;
  private size = 10;

  isManagerOrAdmin: boolean;

  constructor(
    private takerService: TakerService, 
    private route: ActivatedRoute,
    private location: Location, 
    private appRouter: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService,
    private takerCacheService: TakerCache 
    ) { }

  ngOnInit(): void {
    this.getCurrentTaker();
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
  }
  
  getTakerId() {
    this.takerId = +this.route.snapshot.paramMap.get('takerId');
  }

  getCurrentTaker() {
    const cachedTaker = this.takerCacheService.retrieve();
    if(cachedTaker == null) {
      this.getTakerId();
      this.takerService.getSingleTaker(this.takerId).subscribe(
        (response: Taker) => {
          this.taker = response;
          this.shelter = response.shelter;
        }
      );
    } else {
      this.taker = cachedTaker;
      this.shelter = cachedTaker.shelter;
    }
    
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz tego opiekuna z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.takerService.deleteTaker(this.taker);
        this.appRouter.navigate(['/takers']);
      }
    })
  }

  onGoBack() {
    this.location.back();
  }

  onNavToShelterDetails() {
      let navigationExtras: NavigationExtras = {
        state: {
          shelter: this.shelter
        }
      };
      this.appRouter.navigate(["/shelter", this.shelter.id], navigationExtras);
  }

  onNavToEdit() {
      let navigationExtras: NavigationExtras = {
      state: {
        shelter: this.shelter
      }
    };
    this.appRouter.navigate(["/takers/details/edit", this.taker.id], navigationExtras);
  }

  onNavToPetList() {
    this.appRouter.navigate(['takers/pets', this.takerId, this.page, this.size]);
  }
}
