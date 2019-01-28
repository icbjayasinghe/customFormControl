import { Component, OnInit, forwardRef, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const RADIO_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButtonComponent),
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
  disable: boolean;

  selectedValue: any;

  constructor(private renderer: Renderer2,
              private element: ElementRef) { }

  writeValue(value: any): void {
     const div = this.radioTag;
     console.log('Div radio: ', div );
     console.log('checked : ' , div.checked);
    // nodeName: "P-RADIOBUTTON"
    // console.log('>>>>>>', <Map<number, any>>(this.element.nativeElement.children[0].attributes)[0].value );
    this.selectedValue = value;
    console.log(this.disable);
      // this.element.nativeElement.children.forEach(element => {
      //   if (element['nodeName'] === 'P-RADIOBUTTON' ) {
      //    // const div = @ViewChild(element['id']);
      //     this.radioTag.checked = true;
      //   }
      // });
    // this.radioTag.focused = true;
    // this.radioTag.checked = true;
    // console.log('disable : ', this.radioTag.disabled);
    // this.renderer.setProperty(div, 'value', value);
    // console.log(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  change( event) {
    console.log('Change Fn', event);
    const div = this.radioTag;
    // console.log('Div radio: ', this.radioTag );
    console.log('Event ', this.selectedValue);
    // div.onModelChange(this.selectedValue);
    // console.log('>>>>>>', <Map<number, any>>(this.element.nativeElement.children[0].attributes)[0].value );
    // this.selectedValue=event.checked;
    // this.onChange(event.checked);

    // const div = this.dropdown;
    // console.log('Div 1: ', div );
  }

  ngOnInit() {
    this.writeValue('val1');
  }

}
