import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { DialogBtnOneComponent } from './components/dialog-btn-one/dialog-btn-one.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogBtnTwoComponent } from './components/dialog-btn-two/dialog-btn-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBtnOneComponent,
    DialogBtnTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Utilizei apenas o Angular Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
