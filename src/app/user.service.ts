import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dummyapi.io/data/v1/user';
  private appId = '6630e25ac7ec1fee3a5d2d61';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({ 'app-id': this.appId });
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(response => response.data as User[])
    );
  }

  getUser(userId: string): Observable<User> {
    const headers = new HttpHeaders({ 'app-id': this.appId });
    return this.http.get<User>(`${this.apiUrl}/${userId}`, { headers });
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'app-id': this.appId });
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

  updateUser(userId: string, user: User): Observable<User> {
    const headers = new HttpHeaders({ 'app-id': this.appId });
    return this.http.put<User>(`${this.apiUrl}/${userId}`, user, { headers });
  }

  deleteUser(userId: string): Observable<any> {
    const headers = new HttpHeaders({ 'app-id': this.appId });
    return this.http.delete<any>(`${this.apiUrl}/${userId}`, { headers });
  }
}
