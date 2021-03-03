import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

formbuilderValue:boolean=false;
reactiveFormsValue:boolean=false;
reactiveFormClicks:number=0;
formBuilderFormClick:number=0


reactiveForms(){
 this.reactiveFormClicks++
 if(this.reactiveFormClicks%2===1){
  this.reactiveFormsValue=true;
 }
 else{
this.reactiveFormsValue=false;
 }
} 

formBuilder(){
this.reactiveFormClicks++;
console.log(this.formbuilderValue)
console.log(this.reactiveFormClicks);

if(this.reactiveFormClicks %2 === 1){
  this.formbuilderValue=true;
  console.log(this.formbuilderValue)
}
else{
  this.formbuilderValue=false;
}

}
    
}
