import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  profileForm = this.fb.group({
    name: ['',Validators.required],
    surname: [''],
    phone:[''],
    address: this.fb.group({
      street: [''],
      city: [''],
    }),
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    
  }
  onsubmit(){
    console.log(this.profileForm.value);
  }

}