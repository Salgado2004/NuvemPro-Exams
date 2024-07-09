import { Component } from '@angular/core';
import { ApiPlaygroundService } from '../../utils/api-playground.service';
import { Execution } from '../../utils/execution';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.css'
})
export class ConsoleComponent {
  lastElement: Node;

  constructor(private api: ApiPlaygroundService) { }

  ngOnInit() {
    this.focusInput()
  }

  focusInput() {
    const input = document.querySelector(".input") as HTMLElement;
    input.focus();
  }

  writeOutput(data: string, user: boolean) {
    const output = document.querySelector(".output");
    if (this.lastElement == null) this.lastElement = output.lastChild;
    const element = this.lastElement.cloneNode();
    element.textContent = data;
    if (user) {
      let div = document.createElement("div");
      let clone = document.querySelector(".pointer").cloneNode();
      div.style.display = "flex";
      clone.textContent = "user [ ~ ]$";
      div.appendChild(clone);
      div.appendChild(element);
      output.appendChild(div);
    } else {
      output.appendChild(element);
    }
  }

  clearOutput() {
    const output = document.querySelector(".output");
    if (this.lastElement == null) this.lastElement = output.lastChild.cloneNode();
    for (let i = 0; output.children.length > 0; i++) {
      output.children.item(0).remove();
    }
  }

  send(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const data = target.value;
    target.value = "";
    if (data == "clear") {
      this.clearOutput();
    } else if (data.startsWith("echo")) {
      this.writeOutput(data.slice(4), true);
    }
    else {
      this.writeOutput(data, true);
      this.api.executeCommand(data).subscribe((execution: Execution) => {
        this.writeOutput(JSON.stringify(execution, ((chave, valor)=>{
          if(valor === null || valor.length === 0) return undefined
          return valor;
        }), 2), false);
        if(execution.error !== null){
          let output = document.querySelector(".output").lastChild as HTMLElement;
          output.style.color = "#e35b59"
        }
      });
    }
  }
}
