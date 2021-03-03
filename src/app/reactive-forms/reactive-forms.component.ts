import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  formVAlues:any=[]
  constructor() { }
   // name = new FormControl(''); //single formcontrol

   informationForm = new FormGroup({
     name : new FormControl(''),
     surname: new FormControl(''),
     phone : new FormControl(''),
     addres: new FormGroup({
       street: new FormControl(''),
       city:new FormControl(''),
     })
   })
  ngOnInit() {
    console.log(name);
   // this.name.setValue('Abhishek');
   
  }
  onsubmit(){
 console.log(this.informationForm.value);
  }
  updateValue(){
    this.informationForm.patchValue({
      name:'Abhishek',
      addres:{
        street:'garkhdea',
      }
    })
     //console.log(this.informationForm.value);
  }
}