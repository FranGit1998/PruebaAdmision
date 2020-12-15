import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ClientComponent } from './component/client/client.component';
import { FormClientComponent } from './component/form-client/form-client.component';
import { ListClientComponent } from './component/list-client/list-client.component';

import { ClientService } from './services/client.service';

import {NgxPaginationModule} from 'ngx-pagination';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientComponent,
    FormClientComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
