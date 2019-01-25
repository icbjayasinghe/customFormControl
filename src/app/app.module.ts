import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppComponent } from './app.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HmtInputComponent } from './hmt-input/hmt-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    HmtInputComponent,
    DropdownComponent,
    InputSwitchComponent,
    RadioButtonComponent,
    CheckBoxComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    InputSwitchModule,
    RadioButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
