import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContributingComponent } from '../contributing/contributing.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  readonly dialog = inject(MatDialog);

  ngOnInit() {
    let path = window.location.pathname.split("/")[1];
    document.querySelector(`#${path}`).classList.add("active");
  }

  showContribute(){
    this.dialog.open(ContributingComponent);
  }
}
