import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { CustomHttpResponse } from '../common/custom-http-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient) { }


  getUsers(): Observable<User[] | HttpErrorResponse> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/user/all/0/10`);
  }

  addUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.httpClient.post<User>(`${this.baseUrl}/user/add`, formData)
  }

  updateUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.httpClient.put<User>(`${this.baseUrl}/user/edit`, formData)
  }

  resetPassword(email: string, password: string): Observable<CustomHttpResponse | HttpErrorResponse> {
    //TODO: dodać request
    return this.httpClient.patch<CustomHttpResponse>(`${this.baseUrl}/user/reset-password`, password);
  }

  updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse> {
    return this.httpClient.post<User>(`${this.baseUrl}/user/profileImage`, formData, 
    {reportProgress: true,
      observe: 'events'
    });
  }

  deleteUser(userId: number): Observable<CustomHttpResponse> {
    return this.httpClient.delete<CustomHttpResponse>(`${this.baseUrl}/user/${userId}`);
  }

  addUsersToLocalCache(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  getUsersFromLocalCache(): User[] {
    if(localStorage.getItem('users')) {
      return JSON.parse(localStorage.getItem('users'));
    }
    return null;
  }

  createUserFormData(loggedInUsername: string, user: User, profileImage: File): FormData {
    const formData = new FormData();
    formData.append('currenUsername', loggedInUsername);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('role', user.role);
    formData.append('isActive', JSON.stringify(user.isActive));
    formData.append('isNonLocked', JSON.stringify(user.isNotLocked));
    formData.append('profileImage', profileImage);
    return formData;
  }
}
