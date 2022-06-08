import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Taker } from './taker';

@Injectable({
    providedIn: 'root',
})
export class TakerCache {
    takerSubject: BehaviorSubject<Taker>;
    takerListSubject: BehaviorSubject<Array<Taker>>;

    constructor() {
        this.takerSubject = new BehaviorSubject(null);
        this.takerListSubject = new BehaviorSubject(null)
    }

    update(taker: Taker):void {
        this.takerSubject.next(taker);
    }

    retrieve(): Taker {
        return this.takerSubject.getValue();
    }
}