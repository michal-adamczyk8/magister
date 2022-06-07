import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakerDetailsEditComponent } from './taker-details-edit.component';

describe('TakerDetailsEditComponent', () => {
  let component: TakerDetailsEditComponent;
  let fixture: ComponentFixture<TakerDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakerDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakerDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
