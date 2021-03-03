import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ReactiveFormsComponent, FormBuilderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
