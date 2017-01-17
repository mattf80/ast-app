import { HomeModule } from './home/home.module';
import { IssuanceModule } from './issuance/issuance.module';
import { InMemDataService } from './data/InMemDataService';
import { AppRoutingModule } from './app-routing.module';

import { VersionsModule } from './versions/versions.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemDataService, {delay: 500}),
    VersionsModule,
    IssuanceModule,
    HomeModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
