import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from 'src/app/shared/models/github-user.model';
import { Repo } from 'src/app/shared/models/repo.model';


@Injectable({ providedIn: 'root' })
export class GithubService {

  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.baseUrl}/users/${username}`);
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseUrl}/users/${username}/repos`);
  }
}
