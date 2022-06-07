import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RoleEnum } from '../enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public baseUrl = environment.apiUrl;
  private token: string;
  private loggedInUsername: string;
  private jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<HttpResponse<User> | HttpErrorResponse> {
    return this.http.post<User>
    (`${this.baseUrl}/user/login`, user, {observe: 'response'})
  }

  register(user: User): Observable<User | HttpErrorResponse> {
    return this.http.post<User>
    (`${this.baseUrl}/user/register`, user)
  }

  resetPassword(user: User): Observable<User | HttpErrorResponse> {
    return this.http.patch<User>(`${this.baseUrl}/user/reset-password`, user)
  }

  logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    localStorage.removeItem('users')
  }

  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    this.loadToken();
    if(this.token != null && this.token !== '') {
      const usernameFromToken = this.jwtHelperService.decodeToken(this.token).sub
      if(usernameFromToken != null || '') {
        if(!this.jwtHelperService.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelperService.decodeToken(this.token).sub;
          return true;
        } 
      }
    } else {
      this.logOut();
      return false;
    }
  }
  public isAdmin(user:User): boolean {
    return user.role === RoleEnum.SUPER_ADMIN;
  }

  public isUser(user:User): boolean {
    return user.role === RoleEnum.USER;
  }

  public isManager(user:User): boolean {
    return user.role === RoleEnum.MANAGER;
  }

  public isAdminOrManager(user: User): boolean {
    return this.isAdmin(user) || this.isManager(user);
  }
  
  public isLoggedManagerOrAdmin(): boolean {
    const user = this.getUserFromLocalCache();
    if(!user) {
      return false;
    } else if(!this.isAdminOrManager(user)) {
      return false;
    }
      return true;
  }

  public isLoggedUserManager(): boolean {
    const user = this.getUserFromLocalCache();
    if(!user) {
      return false;
    } else if(!this.isAdmin(user)) {
      return false;
    }
      return true;
  }

  public getLoggedUserShelterId(): number {
    const user = this.getUserFromLocalCache();
    if(!user) {
      return -1;
    }
    return user.shelterId;

  }

}
