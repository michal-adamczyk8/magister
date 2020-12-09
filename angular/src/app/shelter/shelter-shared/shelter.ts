import {ShelterAddress} from './shelterAddress';

export class Shelter {
  constructor(
    public shelterName: string,
    public phoneNumber: string,
    public email: string,
    public nip: string,
    public regon: string,
    public krs: string,
    public address: ShelterAddress,
    public description: string,
    public imagePath: string,
    public websiteUrl: string,
    public facebookUrl: string,
    public twitterUrl: string,
    public instagramUrl: string,
    public bankAccount: string,
    public swiftCode: string,
    public openingTime: string) {
  }
}
