import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblockComponent } from './codeblock.component';

describe('CodeblockComponent', () => {
  let component: CodeblockComponent;
  let fixture: ComponentFixture<CodeblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeblockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
