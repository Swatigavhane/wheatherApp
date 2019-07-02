import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WDetailsComponent } from './w-details/w-details.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiwheatherService } from './apiwheather.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule ,MatTableModule, MatInputModule , MatCardModule , MatIconModule , MatGridListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WDetailsComponent,

  ],
  imports: [
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [ApiwheatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
