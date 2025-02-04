import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nuvempro exams';
  private _snackBar = inject(MatSnackBar);
  consent: boolean;

  ngOnInit() {
    this.consent = window.localStorage.getItem("consent") == null;
  }

  ngAfterViewInit() {
    if (this.consent) {
      this._snackBar.open(
        "Este site utiliza cookies para melhorar a experiência do usuário.", "Ok!"
      ).onAction().subscribe((ok) => {
        window.localStorage.setItem("consent", "done");
        this.consent = !this.consent;
      });
    }
  }
}
