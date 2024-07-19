import { Component, Input } from '@angular/core';
import { QueryCodeService } from '../../utils/query-code.service';

@Component({
  selector: 'codeblock',
  templateUrl: './codeblock.component.html',
  styleUrl: './codeblock.component.css'
})
export class CodeblockComponent {
  @Input() path: string;
  languages: string[] = ['python', 'csharp', 'javascript', 'json', 'bash'];
  pending: boolean = true;
  code: string;

  constructor(private query: QueryCodeService) { }
  
  ngOnInit() {
    this.query.getCode(this.path).then((data) => {
      this.code = data;
      this.pending = false;
    });
  }
}
