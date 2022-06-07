import { Shelter } from 'src/app/shelter/shelter-shared/shelter';

export class Taker{
    constructor (
        private _id: number,
        private _firstName: string,
        private _lastName: string,
        private _email: string,
        private _phoneNumber: string,
        private _status: string,
        private _shelter: Shelter,
        private _imageUrl: string
    ) {
    }

    public get id(): number {
        return this._id;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public set imageUrl(value: string) {
        this._imageUrl = value;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get status(): string {
        return this._status;
    }

    public set status(value: string) {
        this._status = value;
    }

    public get shelter(): Shelter {
        return this._shelter;
    }
}