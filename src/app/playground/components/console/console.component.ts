import { catchError, of } from 'rxjs';
import { Component, inject } from '@angular/core';
import { Execution } from '../../utils/execution';
import { HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ApiPlaygroundService } from '../../utils/api-playground.service';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.css'
})
export class ConsoleComponent {
  consoleOutput: Element;
  userPointer: Element;
  lastElement: Node;
  readonly dialog = inject(MatDialog);

  constructor(private api: ApiPlaygroundService) { }

  ngOnInit() {
    this.focusInput();
    this.userPointer = document.querySelector(".pointer");
    this.consoleOutput = document.querySelector(".output");
  }

  help(): void {
    this.dialog.open(HelpDialogComponent);
  }

  /* Focus the console input */
  focusInput(): void {
    const input = document.querySelector(".input") as HTMLElement;
    input.focus();
  }

  /* Create a new element with the same features */
  createElement(target: Element, data: string): Element {
    const element = target.cloneNode() as Element;
    element.textContent = data;
    return element;
  }

  /* Write the user prompt */
  writeUserPrompt(element: Element): void {
    /* Create a new div and clone the user pointer and the element */
    let clone = this.createElement(this.userPointer, "user [ ~ ]$");
    let div = document.createElement("div");
    div.style.display = "flex";
    div.append(clone, element);

    this.consoleOutput.appendChild(div);
  }

  /* Write the output in the console */
  writeOutput(data: string, user: boolean): void {
    if (this.lastElement == null) this.lastElement = this.consoleOutput.lastChild;

    /* Create a new element */
    const element = this.createElement(this.lastElement as Element, data);
    if (user) {
      this.writeUserPrompt(element);
    } else {
      this.consoleOutput.appendChild(element);
    }
  }

  /* Clear the output and save the last element */
  clearOutput(): void {
    let o = this.consoleOutput;
    if (!this.lastElement && o.lastChild) {
      this.lastElement = o.lastChild.cloneNode(true);
    }

    while (o.firstChild) {
      o.removeChild(o.firstChild);
    }
  }

  /* Retrieve the data from the input and clear it */
  retrieveData(target: HTMLInputElement): string {
    let data: string = target.value;
    target.value = "";
    return data;
  }

  /* Replacer function for JSON.stringify */
  replacer(key: string, value: string): string {
    if (value === null || value.length === 0) return undefined;
    return value;
  }

  /* Execute the command via API and write the output */
  executeCommand(data: string): void {
    this.api.executeCommand(data).pipe(
      catchError(error => {
        /* Handling error messages */
        return of({
          body: (error.status === 0) ? { error: "Falha na comunicação com a API" } : error.error,
          status: error.status
        });
      })
    ).subscribe((response: HttpResponse<Execution>) => {
      /* Write API response on console */
      const execution: Execution = response.body;
      this.writeOutput(JSON.stringify(execution, this.replacer, 2), false);

      /* Sintax highlighting error messages */
      if (response.status >= 400 || response.status === 0) {
        let output = this.consoleOutput.lastChild as HTMLElement;
        output.style.color = "#e35b59"
      }
    });
  }

  /* Handle user input */
  send(event: KeyboardEvent): void {
    const data = this.retrieveData(event.target as HTMLInputElement);
    this.writeOutput(data, true);

    switch (true) {
      case (data === "clear"):
        this.clearOutput();
        break;
      case (data.startsWith("echo ")):
        this.writeOutput(data.slice(5), false);
        break;
      default:
        this.executeCommand(data);
    }
  }
}
