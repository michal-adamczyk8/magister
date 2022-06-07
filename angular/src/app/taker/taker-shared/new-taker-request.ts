export class NewTakerRequest {
    constructor(
        private firstName: string,
        private lastName: string,
        private email: string,
        private phoneNumber: string,
        private imageUrl: string,
        private shelterId: number
    ) {}
}