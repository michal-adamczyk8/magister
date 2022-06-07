import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakerListComponent } from './taker-list.component';

describe('TakerListComponent', () => {
  let component: TakerListComponent;
  let fixture: ComponentFixture<TakerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
