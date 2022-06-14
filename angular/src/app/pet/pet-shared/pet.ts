import {Shelter} from '../../shelter/shelter-shared/shelter';
import {Taker} from '../../taker/taker-shared/taker';

export class Pet {
    public shelterDto: Shelter;

    constructor(
        public id: number,
        public type: string,
        public name: string,
        public sex: string,
        public raceType: string,
        public birthYear: number,
        public birthMonth: number,
        public weight: number,
        public admittanceDate: Date,
        public description: string,
        public foundPlace: string,
        public shelterId: number,
        public status: string,
        public shelter: Shelter,
        public takers: Taker[],
        public imageUrl: string) {
    }
}
