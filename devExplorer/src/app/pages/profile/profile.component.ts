import { Component, Input } from '@angular/core';
import { GithubUser } from 'src/app/shared/models/github-user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() user!: GithubUser;
}
