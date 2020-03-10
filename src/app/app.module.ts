import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {FolderListComponent} from './folder-list/folder-list.component';
import {SearchFormComponent} from './search-form/search-form.component';

import {AppRoutingModule} from '../app/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user-service.service';
import {FolderService} from "./service/folder-service.service";
import {SearchService} from "./service/search-service.service";



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    FolderListComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, FolderService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
