import { Component, OnInit, forwardRef, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckBoxComponent),
  multi: true
};

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor {
  model: any;
  value: any;
  binary: string;
  selectedValues: any;
  disabled = false;
  checked = false;
  onChange;
  writeValue(model: any): void {
    // this.model = model;
    // this.checked = this.isChecked();
    // this.cd.markForCheck();
    this.selectedValues = model;
    // console.log('checked val : ', this.checked);
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  change(event, checkbox, focus: boolean) {
    // event.preventDefault();
        // if (this.disabled) {
        //     return;
        // }
        // this.checked = !this.checked;
        // this.updateModel();
        // if (focus) {
        //     checkbox.focus();
        // }
    console.log(event);
    console.log(checkbox);
    console.log('select value :  ' , this.selectedValues);
    // this.onChange(event);
  }

  // updateModel() {
  //   if (!this.binary) {
  //       if (this.checked) {
  //           this.addValue();
  //       } else {
  //           this.removeValue();
  //       }
        // this.onModelChange(this.model);
        // if (this.formControl) {
        //     this.formControl.setValue(this.model);
        // }
    // } else {
        // this.onModelChange(this.checked);
    // }
    // this.onChange.emit(this.checked);
// }

// addValue() {
//   if (this.model) {
//       this.model = [...this.model, this.value];
//   } else {
//       this.model = [this.value];
//   }
// }

//   isChecked(): boolean {
//     if (this.binary) {
//         return this.model;
//     } else {
//         return this.model && this.model.indexOf(this.value) > -1;
//     }
// }

// removeValue() {
//   this.model = this.model.filter(val => val !== this.value);
// }

  constructor(private renderer: Renderer2, private elRef: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.writeValue(['val2']);
  }

}
