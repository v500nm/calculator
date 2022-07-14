import { HostListener, Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  Answer:any="";
  num(value:any){
    this.Answer=this.Answer+value.target.value;
  }
  equal(){
    this.Answer=eval(this.Answer)
  }
  refresh(){
    this.Answer=window.location.reload();
  }
  calcValue(solve:any){
    this.Answer=eval(solve)
  }
  @HostListener('document:keypress',['$event'])
  handleKeyboardEvent(event:KeyboardEvent){
    console.log(event.key);
    if(event.key=='Enter'){
      this.Answer=eval(this.Answer)
    }else{
this.Answer=this.Answer+event.key
    }
  }
}
