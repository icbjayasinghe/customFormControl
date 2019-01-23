import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  value: string;
  constructor(private fb: FormBuilder) {
    // 
  }
  ngOnInit() {
    this.value = 'Sachith';
    // control = new formControl();
    this.form = this.fb.group({
      title: [''],
      title1: [''],
      title2: [{ "id": 5, "name": "Paris", "code": "PRS" }],
      title3: [''],
      title4: [''],
      title5: [{ "id": 3, "name": "London", "code": "LDN" }]
    })
  }
  
}
