import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Pet } from "src/app/pet-shared/pet";
import { PetService } from "src/app/pet-shared/pet-service";
import { PetPage } from 'src/app/pet-shared/pet-page';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { User } from 'src/app/user/user';

@Component({
  selector: "app-all-pet-list",
  templateUrl: "./all-pet-list.component.html",
  styleUrls: ["./all-pet-list.component.css"]
})
export class AllPetListComponent implements OnInit {
  pets: Array<Pet> = [];
  currentSelectedPage: number = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15, 20];
  totalItems: number;
  itemsPerPage: number;
  page: number = 1;
  user: User;
  isManagerOrAdmin: boolean;
  isManager: boolean;

  constructor(
    private petService: PetService, 
    private appRouter: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService,
    ) {}


  ngOnInit() {
    this.retrieveAllPets();
    this.user = this.authService.getUserFromLocalCache();
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
    this.isManager = this.authService.isLoggedUserManager();
  }

  retrieveAllPets(): void {
    this.petService.getAllPets(this.page-1, this.pageSize).subscribe(
      (petPage: PetPage) => {
        this.pets = petPage.content;
        this.totalItems = petPage.totalElements;
        this.currentSelectedPage = petPage.number;
        this.itemsPerPage = this.totalItems / this.pageSize;
      },
      (error) => {
        console.log("Error: " + error);
      }
    )
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveAllPets();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveAllPets();
  }

  processResult() {
    return data => {
      this.pets = data.content.pets;
    };
  }

  onNavToDetails(pet: Pet) {
    this.appRouter.navigate(['pets/details', pet.id]);
  }

  onNavToEdit(pet: Pet) {
    this.appRouter.navigate(["/pets/details/edit", pet.id]);
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
        this.appRouter.navigate(['/pets']);
      }
    })
  }

  onAddNewPet(): void {
    this.appRouter.navigate(["/pets/new"]);
  }
}