import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MailFolder} from "../app/mail-folder";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FolderService {

  private foldersUrl: string;

  constructor(private http: HttpClient) {
    this.foldersUrl = 'http://localhost:8080/folders';
  }

  public findAll(): Observable<MailFolder[]> {
    return this.http.get<MailFolder[]>(this.foldersUrl);
  }
}
