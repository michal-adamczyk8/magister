export class ShelterAddress {
    constructor(
        public id: number,
        public shelterId: number,
        public streetName: string,
        public houseNumber: string,
        public flatNumber: string,
        public city: string,
        public zipCode: string
        ) {
    }
}