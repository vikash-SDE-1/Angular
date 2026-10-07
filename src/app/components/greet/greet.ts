import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-greet',
  imports: [FormsModule],
  templateUrl: './greet.html',
  styleUrl: './greet.css',
})
export class Greet {
  name:string="";
  isDisabled:boolean=false;
  count:number=0;
 

  increase()
  {
    this.count++;
  }
  decrease()
  {
    if(this.count>0)
    {
      this.count--;

    }else{
      alert("Cannot be negative")
    }
  }

  getInput(event:Event)
  {
    const input= event.target as HTMLInputElement;
    console.log(input.value)
  }

  submit(input:string | number)
  {

    
  }
}
