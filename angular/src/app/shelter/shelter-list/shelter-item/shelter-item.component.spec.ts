import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShelterItemComponent} from './shelter-item.component';

describe('ShelterItemComponent', () => {
    let component: ShelterItemComponent;
    let fixture: ComponentFixture<ShelterItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShelterItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShelterItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
