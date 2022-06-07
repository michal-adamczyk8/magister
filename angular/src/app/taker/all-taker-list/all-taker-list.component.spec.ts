import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTakerListComponent } from './all-taker-list.component';

describe('AllTakerListComponent', () => {
  let component: AllTakerListComponent;
  let fixture: ComponentFixture<AllTakerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTakerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
