import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Taker } from '../taker-shared/taker';
import { TakerService } from '../taker-shared/taker-service';
import { ActivatedRoute, Router } from '@angular/router';
import { TakerPage } from '../taker-shared/taker-page';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-taker-list',
  templateUrl: './taker-list.component.html',
  styleUrls: ['./taker-list.component.css']
})
export class TakerListComponent implements OnInit {
  takers: Array<Taker> = [];

  currentSelectedPage: number = 0;
  pageSize = 10;
  pageSizes = [5, 10, 15, 20];
  totalItems: number;
  itemsPerPage: number;
  page = 1;
  shelterId: number;
  isManagerOrAdmin: boolean;

  constructor(
    private takerService: TakerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.shelterId = +this.activatedRoute.snapshot.paramMap.get("shelterId");

    this.retrieveTakers();
    this.isManagerOrAdmin = this.authService.isLoggedManagerOrAdmin();
  }

  retrieveTakers(): void {
    this.takerService.getAllTakersForShelter(this.shelterId, this.page - 1, this.pageSize).subscribe(
      (takerPage: TakerPage) => {
        this.takers = takerPage.content;
        this.totalItems = takerPage.totalElements;
        this.currentSelectedPage = takerPage.number;
        this.itemsPerPage = this.totalItems / this.pageSize;
        console.log(this.takers.length)
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
    this.retrieveTakers();
  }

  onAddTaker() {
    const httpUrl = "/shelter/" + this.shelterId + "/takers/new";
    this.router.navigate([httpUrl], { state: { data: this.shelterId } });
  }

  onNavToDetails(taker: Taker) {
    this.router.navigate(['pets/details', taker.id]);
  }
}
