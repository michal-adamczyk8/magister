import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakerNewComponent } from './taker-new.component';

describe('TakerNewComponent', () => {
  let component: TakerNewComponent;
  let fixture: ComponentFixture<TakerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakerNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
