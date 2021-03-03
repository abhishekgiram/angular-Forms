import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,  Validators } from '@angular/forms';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  customerProducts: FormGroup;
  items: FormArray;

  constructor(public fb : FormBuilder) { }

 

  ngOnInit() {
 this.customerProducts= this.fb.group({
   name:[''],
   email:[''],
   items:this.fb.array([this.createItems()])
 })
  }

  onsubmit(){

  }
  createItems():FormGroup{
    return this.fb.group({
      price:[''],
      description:[''],
      qty:['']
    })

  }

  addItem(){
    this.items= this.customerProducts.get('items') as FormArray;
    this.items.push(this.createItems());
    console.log(this.items.value)

  }

}