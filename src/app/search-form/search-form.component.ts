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

  options = [
    {name: '  Check seen', value: 'read', checked: true},
    {name: '  Move to basket', value: 'basket', checked: false},
    {name: '  Totally delete', value: 'delete', checked: false}
  ]

  fileMove = [
    {name: '  Only On PC (folder /Donloads)', value: 'pc', checked: true},
    {name: '  PC and Google drive', value: 'google', checked: false}
  ]

  onSubmit() {
    this.searchService.save(this.search).subscribe(result => this.gotoSearch());
  }

  gotoSearch() {
    this.router.navigate(['/search']);
  }
}
