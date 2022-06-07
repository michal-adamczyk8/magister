export class User {
  public id: number;
  public userId: string;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public email: string;
  public profileImageUrl: string;
  public lastLoginDate: Date;
  public lastLoginDateDisplay: Date;
  public joinedDate: Date;
  public role: string;
  public isActive: boolean;
  public isNotLocked: boolean;
  public shelterId: number;

  constructor() {
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.email = '';
      this.isActive = false;
      this.isNotLocked = false;
      this.role = '';
  }
}
