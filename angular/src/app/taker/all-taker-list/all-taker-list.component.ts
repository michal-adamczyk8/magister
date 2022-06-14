import { Component, OnInit } from '@angular/core';
import { Taker } from '../taker-shared/taker';
import { TakerService } from '../taker-shared/taker-service';
import { Router, ActivatedRoute } from '@angular/router';
import { TakerPage } from '../taker-shared/taker-page';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-all-taker-list',
  templateUrl: './all-taker-list.component.html',
  styleUrls: ['./all-taker-list.component.css']
})
export class AllTakerListComponent implements OnInit {

  takers: Array<Taker> = [];
  currentSelectedPage: number = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15, 20];
  totalItems: number;
  itemsPerPage: number;
  page: number = 1;
  isManagerOrAdmin: boolean;
  isManager: boolean;
  shelterId: number;

  constructor(
    private takerService: TakerService, 
    private appRouter: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.shelterId = +this.activatedRoute.snapshot.paramMap.get("shelterId");
    this.retrieveTakers();
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
    this.isManager = this.authService.isLoggedUserManager();
  }

  retrieveTakers(): void {
    if(this.shelterId) {
      this.retrieveTakersForShelter();
    } else {
      this.retrieveAllTakers();
    }
  }

  retrieveTakersForShelter(): void {
    this.takerService.getAllTakersForShelter(this.shelterId, this.page - 1, this.pageSize).subscribe(
      (takerPage: TakerPage) => {
        this.takers = takerPage.content;
        this.totalItems = takerPage.totalElements;
        this.currentSelectedPage = takerPage.number;
        this.itemsPerPage = this.totalItems / this.pageSize;
      },
      (error) => {
        console.log("Error: " + error);
      }
    )
  }

  retrieveAllTakers(): void {
    this.takerService.getAllTakers(this.page - 1, this.pageSize).subscribe(
      (takerPage: TakerPage) => {
        this.takers = takerPage.content;
        this.totalItems = takerPage.totalElements;
        this.currentSelectedPage = takerPage.number;
        this.itemsPerPage = this.totalItems / this.pageSize;
      },
      (error) => {
        console.log("Error: " + error);
      }
    )
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveTakers();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveAllTakers();
  }

  processResult() {
    return data => {
      this.takers = data.content.pets;
    };
  }

  onNavToDetails(taker: Taker) {
    this.appRouter.navigate(['takers/details', taker.id]);
  }

  onNavToEdit(taker: Taker) {
    this.appRouter.navigate(["takers/details/edit", taker.id]);
  }

  onDelete(taker: Taker) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz tego opiekuna z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.takerService.deleteTaker(taker);
        this.appRouter.navigate(['/takers']);
      }
    })
  }

  onAddNewTaker() {
    this.appRouter.navigate(["/takers/new"]);

  }
}
