import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  ngOnInit() {
    let path = window.location.pathname.split("/")[1];
    document.querySelector(`#${path}`).classList.add("active");
  }

  showContribute(){
    let contribute = document.querySelector(".contribute");
    contribute.classList.toggle("hide");
  }
}
