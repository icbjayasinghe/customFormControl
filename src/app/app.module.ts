import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HmtInputComponent } from './hmt-input/hmt-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    HmtInputComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
