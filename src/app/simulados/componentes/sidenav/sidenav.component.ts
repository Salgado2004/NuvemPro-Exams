import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  showContribute(){
    let contribute = document.querySelector(".contribute");
    contribute.classList.toggle("hide");
  }
}
