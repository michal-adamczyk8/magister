import {ShelterAddress} from './shelterAddress';

export class Shelter {
  constructor(
    public shelterName: string,
    public phoneNumber: string,
    public email: string,
    public nip: string,
    public regon: string,
    public address: ShelterAddress,
    public description: string,
    public imagePath: string) {
  }
}
