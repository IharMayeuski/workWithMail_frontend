import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FolderListComponent } from './folder-list/folder-list.component';

import { AppRoutingModule } from '../app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user-service.service';
import {FolderService} from "./folder-service.service";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    FolderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, FolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
