import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Search } from '../search';
import { Observable } from 'rxjs/Observable';
import {User} from "../user";

@Injectable()
export class SearchService {

  private searchUrl: string;

  constructor(private http: HttpClient) {
    this.searchUrl = 'http://localhost:8080/search';
  }

  public save(search: Search) {
    return this.http.post<Search>(this.searchUrl, search.name);
  }
}

