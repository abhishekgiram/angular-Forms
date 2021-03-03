import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
reactiveFormsValue:boolean=false;
reactiveFormClicks:number=0;
reactiveForms(){
 this.reactiveFormClicks++
 if(this.reactiveFormClicks%2===1){
  this.reactiveFormsValue=true;
 }
 else{
this.reactiveFormsValue=false;
 }
} 
}
