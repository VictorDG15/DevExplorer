import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  searchControl = new FormControl('');
  loading = false;

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      filter(v => !!v && v.trim().length >= 2)
    ).subscribe(value => {
      this.loading = true;
      this.search.emit(value!.trim());
      setTimeout(() => this.loading = false, 800);
    });
  }

  // kept for backwards compat but debounce is handled above
  onSearch(event: any) { }
}
