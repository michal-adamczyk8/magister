import { Pet } from './pet';
import { User } from '../user/user';
import { WalkStatus } from '../enum/walk-status.enum';

export class Walk {
    constructor(
        private _id: number,
        private _dateTime: Date,
        private _pet: Pet,
        private _user: User,
        private _status: WalkStatus,
        private _createdBy: string,
        private _createdAt: Date,
        private _modifiedBy: string, 
        private _modifiedAt: Date
    ) {

    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get dateTime(): Date {
        return this._dateTime;
    }

    public set dateTime(value: Date) {
        this._dateTime = value;
    }

    public get pet(): Pet {
        return this._pet;
    }

    public set pet(value: Pet) {
        this._pet = value;
    }

    public get user(): User {
        return this._user;
    }

    public set user(value: User) {
        this._user = value;
    }

    public get status(): WalkStatus {
        return this._status;
    }

    public set status(value: WalkStatus) {
        this._status = value;
    }

    public get createdBy(): string {
        return this._createdBy;
    }

    public set createdBy(value: string) {
        this._createdBy = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get modifiedBy(): string {
        return this._modifiedBy;
    }

    public set modifiedBy(value: string) {
        this._modifiedBy = value;
    }

    public get modifiedAt(): Date {
        return this._modifiedAt;
    }

    public set modifiedAt(value: Date) {
        this._modifiedAt = value;
    }
}