import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetListComponent } from './all-pet-list.component';

describe('AllPetListComponent', () => {
  let component: AllPetListComponent;
  let fixture: ComponentFixture<AllPetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
