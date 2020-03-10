import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../service/search-service.service';
import { Search } from '../../app/search';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  search: Search;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService) {
    this.search = new Search();
  }

  onSubmit() {
    this.searchService.save(this.search).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
