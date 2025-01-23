import { Component, Input, OnChanges } from '@angular/core';
import { QueryCodeService } from '../../utils/service/query-code.service';

@Component({
  selector: 'codeblock',
  templateUrl: './codeblock.component.html',
  styleUrl: './codeblock.component.css'
})
export class CodeblockComponent implements OnChanges {
  @Input() path: string;
  languages: string[] = ['python', 'csharp', 'javascript', 'json', 'bash'];
  pending: boolean = true;
  code: string;

  constructor(private query: QueryCodeService) { }
  
  ngOnChanges() {
    this.query.getCode(this.path).then((data) => {
      this.code = data;
      this.pending = false;
    });
  }
}
