import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebareComponent } from "../../sidebare/sidebare.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,HeaderComponent, SidebareComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
