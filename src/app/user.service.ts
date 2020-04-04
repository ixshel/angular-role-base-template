import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getById() {
    // return this.http.get<User>(`${config.apiUrl}/users/${id}`);
    return this.http.get<User>('/profile/me');
  }
}
