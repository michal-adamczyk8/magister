export class Pet {
    constructor(
        private _id: number,
        private _type: string,
        private _name: string,
        private _sex: string,
        private _raceType: string,
        private _birthYear: number,
        private _birthMonth: number,
        private _weight: number,
        private _admittanceDate: Date,
        private _description: string,
        private _foundPlace: string,
        private _shelterId: number,
        private _status: string   
    ) {
    }

    public get foundPlace(): string {
        return this._foundPlace;
    }
    public set foundPlace(value: string) {
        this._foundPlace = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get admittanceDate(): Date {
        return this._admittanceDate;
    }
    public set admittanceDate(value: Date) {
        this._admittanceDate = value;
    }
    public get birthMonth(): number {
        return this._birthMonth;
    }
    public set birthMonth(value: number) {
        this._birthMonth = value;
    }
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public get birthYear(): number {
        return this._birthYear;
    }
    public set birthYear(value: number) {
        this._birthYear = value;
    }
    public get raceType(): string {
        return this._raceType;
    }
    public set raceType(value: string) {
        this._raceType = value;
    }
    public get sex(): string {
        return this._sex;
    }
    public set sex(value: string) {
        this._sex = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get shelterId(): number {
        return this._shelterId;
    }
    public set shelterId(value: number) {
        this._shelterId = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
}
