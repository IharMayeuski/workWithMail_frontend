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

  public findAll(name: string, pass: string): Observable<MailFolder[]> {
    name = "maevskii@list.ru";
    pass = "Ii98729872list";
    let myData = {
      name: name,
      pass: pass
    };
    return this.http.post<MailFolder[]>(this.foldersUrl,myData);
  }
}
