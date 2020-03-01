import { Component, OnInit } from '@angular/core';
import {FolderService} from '../../app/folder-service.service';
import {MailFolder} from "../mail-folder";
// import {UserService} from "../user-service.service";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  folders: MailFolder [];

  constructor(private folderService: FolderService) {
  }

  ngOnInit() {
    this.folderService.findAll().subscribe(data => {
      this.folders = data;
    });
  }

}
