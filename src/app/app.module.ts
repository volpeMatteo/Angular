import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SalutoComponent } from './saluto/saluto.component';
import { from } from 'rxjs';
import { Injector } from '@angular/core';
import {createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SalutoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
