import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsEditComponent } from './pet-details-edit.component';

describe('PetDetailsEditComponent', () => {
  let component: PetDetailsEditComponent;
  let fixture: ComponentFixture<PetDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
