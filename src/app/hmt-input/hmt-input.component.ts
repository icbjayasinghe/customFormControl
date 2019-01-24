import { Component, OnInit, ViewChild, Renderer2, forwardRef, Input } from '@angular/core';
import { TextareaComponent } from '../textarea/textarea.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> HmtInputComponent),
  multi: true
};

@Component({
  selector: 'app-hmt-input',
  templateUrl: './hmt-input.component.html',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
  styleUrls: ['./hmt-input.component.css']
})
export class HmtInputComponent implements ControlValueAccessor {
  @Input('filter') filter: boolean;

  @ViewChild('dropdown') dropdown;
  onChange;

  onTouched;
  constructor( private renderer : Renderer2 ) { }

  ngOnInit() {
  }

  writeValue(value: any): void {
  //  console.log('value : ', value);
    const div = this.dropdown;
    // console.log('Div : ', div );
    // this.renderer.setProperty(div, 'value', 'Sachithra');
    this.selectedCity1 = value;
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.dropdown.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }

  change( event ){
    //console.log('Event ', event);
    this.onChange(event.value)
    //  const div = this.dropdown;
    //   console.log('Div 1: ', div );
  }









  selectedCity1: any;

  cities1 = [
    {label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
];
}
