import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAltaComponent } from './exp-alta.component';

describe('ExpAltaComponent', () => {
  let component: ExpAltaComponent;
  let fixture: ComponentFixture<ExpAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
