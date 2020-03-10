import { Component, OnInit } from '@angular/core';
import {FolderService} from '../service/folder-service.service';
import {MailFolder} from "../mail-folder";
import {selector} from "rxjs/operator/publish";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  folders: MailFolder [];
  name: string;
  pass: string;

  constructor(private folderService: FolderService) {
  }

  ngOnInit() {
    this.folderService.findAll('maevskii@list.ru', 'Ii98729872list').subscribe(data => {
      this.folders = data;
    });
  }

}
