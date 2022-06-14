import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Pet } from "src/app/pet/pet-shared/pet";
import { PetService } from "src/app/pet/pet-shared/pet-service";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { PetPage } from 'src/app/pet/pet-shared/pet-page';
import { TakerService } from 'src/app/taker/taker-shared/taker-service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: "app-pet-list",
  templateUrl: "./pet-list.component.html",
  styleUrls: ["./pet-list.component.css"]
})
export class PetListComponent implements OnInit {
  pets: Array<Pet> = [];
  currentSelectedPage: number = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15, 20];
  totalItems: number;
  itemsPerPage: number;

  page = 1;

  takerId: number;
  shelterId: number;

  isManagerOrAdmin: boolean;
  isManager: boolean;


  constructor(
    private petService: PetService,
    private takerService: TakerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService
  ) {} 

  ngOnInit() {
    this.shelterId = +this.activatedRoute.snapshot.paramMap.get("shelterId");
    this.takerId = +this.activatedRoute.snapshot.paramMap.get("takerId");
    if(this.shelterId) {
      this.retrievePetsForShelter();
    } else {
      this.retrievePetsForTaker();
    }
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
    this.isManager = this.authService.isLoggedUserManager();
  }

  retrievePets() {
    if(this.shelterId) {
      this.retrievePetsForShelter();
    } else {
      this.retrievePetsForTaker();
    }
  }

  retrievePetsForShelter(): void {
    this.petService.getAllPetsForShelter(this.shelterId, this.page - 1, this.pageSize).subscribe(
      (petPage: PetPage) => {
        this.pets = petPage.content;
        this.totalItems = petPage.totalElements;
        this.currentSelectedPage = petPage.number;
        this.itemsPerPage = this.totalItems / this.pageSize;
      },
      (error) => {
        console.log("Error: " + error);
      }
    );
  }

  retrievePetsForTaker() {
    this.takerService.getAllPetsForTaker(this.takerId, this.page - 1, this.pageSize).subscribe(
      (petPage: PetPage) => {
        this.pets = petPage.content;
        this.totalItems = petPage.totalElements;
        this.currentSelectedPage = petPage.number;
        this.itemsPerPage = this.totalItems / this.pageSize;
      },
      (error) => {
        console.log("Error: " + error);
      }
    );  }

  handlePageChange(event): void {
    this.page = event;
    this.retrievePets();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievePets();
  }

  onAddPet() {
    const httpUrl = "/shelter/" + this.shelterId + "/pets/new";
    this.router.navigate([httpUrl], { state: { data: this.shelterId } });
  }

  onNavToDetails(pet: Pet) {
    this.router.navigate(['pets/details', pet.id]);
  }

  onNavToEdit(pet: Pet) {
    this.router.navigate(["/pets/details/edit", pet.id]);
  }

  onDelete(pet: Pet) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Jesteś pewien?",
        message: "Właśnie usuwasz tego zwierzaka z systemu." 
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.petService.deletePet(pet.id);
        this.router.navigate(['/shelters']);
      }
    })
  }

  onAddNewPet(): void {
    this.router.navigate(["/pets/new"]);
  }
}
