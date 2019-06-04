import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCheckboxModule, MatDividerModule, MatListModule,
         MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './state/app.reducer';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AddItemModalComponent } from './add-item-modal.component';


export const APP_ROUTES: Route[] = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddItemModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forRoot(fromApp),
    StoreDevtoolsModule.instrument({
      name: 'Electron To Do DevTools',
      maxAge: 25
    }),
  ],
  entryComponents: [
    AddItemModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
