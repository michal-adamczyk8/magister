import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakerDetailsComponent } from './taker-details.component';

describe('TakerDetailsComponent', () => {
  let component: TakerDetailsComponent;
  let fixture: ComponentFixture<TakerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
