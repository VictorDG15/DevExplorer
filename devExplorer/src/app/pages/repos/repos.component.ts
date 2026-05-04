import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/shared/models/repo.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {

   @Input() repos: Repo[] = [];
}
