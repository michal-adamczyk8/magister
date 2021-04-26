export class Shelter {
    constructor(
        private _shelterId: number,
        private _shelterName: string,
        private _phoneNumber: string,
        private _email: string,
        private _nip: string,
        private _regon: string,
        private _krs: string,
        private _streetName: string,
        private _houseNumber: string,
        private _flatNumber: string,
        private _city: string,
        private _zipCode: string,
        private _description: string,
        private _imagePath: string,
        private _websiteUrl: string,
        private _facebookUrl: string,
        private _twitterUrl: string,
        private _instagramUrl: string,
        private _bankAccount: string,
        private _swiftCode: string,
        private _openingTime: string) {
    }

    public get openingTime(): string {
        return this._openingTime;
    }
    public set openingTime(value: string) {
        this._openingTime = value;
    }
    public get swiftCode(): string {
        return this._swiftCode;
    }
    public set swiftCode(value: string) {
        this._swiftCode = value;
    }
    public get bankAccount(): string {
        return this._bankAccount;
    }
    public set bankAccount(value: string) {
        this._bankAccount = value;
    }
    public get instagramUrl(): string {
        return this._instagramUrl;
    }
    public set instagramUrl(value: string) {
        this._instagramUrl = value;
    }
    public get twitterUrl(): string {
        return this._twitterUrl;
    }
    public set twitterUrl(value: string) {
        this._twitterUrl = value;
    }
    public get facebookUrl(): string {
        return this._facebookUrl;
    }
    public set facebookUrl(value: string) {
        this._facebookUrl = value;
    }
    public get websiteUrl(): string {
        return this._websiteUrl;
    }
    public set websiteUrl(value: string) {
        this._websiteUrl = value;
    }
    public get imagePath(): string {
        return this._imagePath;
    }
    public set imagePath(value: string) {
        this._imagePath = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get zipCode(): string {
        return this._zipCode;
    }
    public set zipCode(value: string) {
        this._zipCode = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    public get flatNumber(): string {
        return this._flatNumber;
    }
    public set flatNumber(value: string) {
        this._flatNumber = value;
    }
    public get houseNumber(): string {
        return this._houseNumber;
    }
    public set houseNumber(value: string) {
        this._houseNumber = value;
    }
    public get streetName(): string {
        return this._streetName;
    }
    public set streetName(value: string) {
        this._streetName = value;
    }
    public get krs(): string {
        return this._krs;
    }
    public set krs(value: string) {
        this._krs = value;
    }
    public get regon(): string {
        return this._regon;
    }
    public set regon(value: string) {
        this._regon = value;
    }
    public get nip(): string {
        return this._nip;
    }
    public set nip(value: string) {
        this._nip = value;
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
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
    public get name(): string {
        return this._shelterName;
    }
    public set name(value: string) {
        this._shelterName = value;
    }
    public get id(): number {
        return this._shelterId;
    }
    public set id(value: number) {
        this._shelterId = value;
    }
}
