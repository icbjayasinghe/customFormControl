import { Component, OnInit, ViewChild, Renderer2, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

export const EPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> TextareaComponent),
  multi: true
};

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  @ViewChild('textarea') textarea;
  onChange;

  onTouched;
  constructor( private renderer : Renderer2 ) { }

  ngOnInit() {
  }

  writeValue(value: any): void {
    const div = this.textarea.nativeElement;
    // console.log('Div : ', this.textarea );
    this.renderer.setProperty(div, 'value', value);
    // console.log(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }

  change( event ){
    // console.log('Event ', event);
   this.onChange(event.target.value)
  }
  

}
