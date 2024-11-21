import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HooksTestingComponent } from "./hooks-testing/hooks-testing.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user_id:{price:number}={price:0};
  cartItems:{price:number}[]=[]
  title = 'Angular-16-App';
  addTocart(){
    console.log('on change get callled',this.user_id);
    
    this.cartItems.push(this.user_id);
  }
}
