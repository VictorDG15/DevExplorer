import { Component } from '@angular/core';
import { GithubUser } from '../../shared/models/github-user.model';
import { Repo } from '../../shared/models/repo.model';
import { GithubService } from 'src/app/core/service/github.service';
import { WeatherService } from 'src/app/core/service/weather.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  user!: GithubUser;
  repos: Repo[] = [];
  weather: any;

  constructor(
    private githubService: GithubService,
    private weatherService: WeatherService
  ) {}

  search(username: string) {
    if (!username) return;

    this.githubService.getUser(username).subscribe(user => {
      this.user = user;

      if (user.location) {
        this.weatherService.getWeather(user.location)
          .subscribe(w => this.weather = w);
      }
    });

    this.githubService.getRepos(username)
      .subscribe(repos => this.repos = repos);
  }
}
