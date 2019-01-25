import { Component, OnInit, forwardRef, Input, ViewChild, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { EACCES } from 'constants';
// import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

export const INPUTSWITCH_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputSwitchComponent),
  multi: true
};


@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.css'],
  providers: [INPUTSWITCH_VALUE_ACCESSOR]
})
export class InputSwitchComponent implements OnInit, ControlValueAccessor {
  // @Input('switch') switch: boolean;
  @ViewChild('switchTag') switchTag;
  onChange;
  onTouched;

  checked2: boolean;

  constructor(private renderer: Renderer2) { }

  writeValue(value: boolean): void {
    // console.log('writeValue :' , value);
    const div = this.switchTag;
    this.checked2 = <boolean>value;
    // div.checked =true;
    // this.cd.markForCheck();
    // console.log(div)
    // console.log("value : ",value, div.checked);
  }
  registerOnChange(fn: any): void {
    // console.log('registerOnChange Fn', fn);
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // console.log('registerOnTouched ', fn);
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.switchTag.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }
  change( event ) {
    // console.log('Change Fn', event);
    // console.log('Event ', event);
    this.checked2 = event.checked;
    this.onChange(event.checked);
    // const div = this.dropdown;
    // console.log('Div 1: ', div );
  }
  ngOnInit() {
    // setTimeout( () => {
    //   console.log(this.checked2)
    // }, 5000)
    // this.writeValue(true);
  }

}
