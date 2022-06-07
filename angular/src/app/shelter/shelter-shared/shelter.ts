import {ShelterAddress} from './shelter-addres';

export class Shelter {
    constructor(
        public id: number,
        public name: string,
        public phoneNumber: string,
        public email: string,
        public nip: string,
        public regon: string,
        public krs: string,
        public description: string,
        public imagePath: string,
        public websiteUrl: string,
        public facebookUrl: string,
        public twitterUrl: string,
        public instagramUrl: string,
        public bankAccount: string,
        public swiftCode: string,
        public openingTime: string,
        public status: string,
        public address: ShelterAddress,
    ) {
    }
}
