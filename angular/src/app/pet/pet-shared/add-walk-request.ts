import { WalkStatus } from '../../enum/walk-status.enum';

export class AddWalkRequest {
    constructor( 
        private dateTime: Date,
        private petId: number,
        private userId: number,
        private status: WalkStatus) {
    }
}