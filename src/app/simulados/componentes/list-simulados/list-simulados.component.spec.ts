import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSimuladosComponent } from './list-simulados.component';

describe('ListSimuladosComponent', () => {
  let component: ListSimuladosComponent;
  let fixture: ComponentFixture<ListSimuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSimuladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
