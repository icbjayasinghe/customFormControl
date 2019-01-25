import { Component, OnInit, forwardRef, Input, ViewChild, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const RADIO_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> RadioButtonComponent),
  multi: true
};

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers: [RADIO_VALUE_ACCESSOR]
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {
  // @Input('switch') switch: boolean;
  @ViewChild('radioTag') radioTag;
  onChange;
  onTouched;

  selectedValue: any;

  constructor(private renderer : Renderer2) { }

  writeValue(value: any): void {
    const div = this.radioTag.nativeElement;
    console.log('Div : ', this.radioTag );
    // this.selectedValue = value;
    //this.renderer.setProperty(div, 'value', value);
    // console.log(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  change( ){
    // console.log('Change Fn', event);
    console.log('Event ', this.selectedValue);

    //this.selectedValue=event.checked;
    //this.onChange(event.checked);

    // const div = this.dropdown;
    // console.log('Div 1: ', div );
  }

  ngOnInit() {
    this.writeValue('val1')
  }

}
