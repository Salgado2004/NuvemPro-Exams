import { Component } from '@angular/core';

@Component({
  selector: 'app-list-simulados',
  templateUrl: './list-simulados.component.html',
  styleUrl: './list-simulados.component.css'
})
export class ListSimuladosComponent {
  simulados = [
    {"nome": "DP900"},
    {"nome": "AZ900"}
  ];

  constructor() { }
}
