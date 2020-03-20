import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Search} from '../search';

@Injectable()
export class SearchService {

  private searchUrl: string;

  constructor(private http: HttpClient) {
    this.searchUrl = 'http://localhost:8080/search';
  }

  public save(search: Search, name: string, pass: string) {
    // return this.http.post<Search>(this.searchUrl, search.name);

    name = (document.getElementById("name") as HTMLInputElement).value;
    pass = ((document.getElementById("pass") as HTMLInputElement).value);

    let data = {
      name: name,
      pass: pass,
      search: search.name,
      path: search.path
    };

    return this.http.post<Search[]>(this.searchUrl, data);

  }
}

