import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjEditComponent } from './proj-edit.component';

describe('ProjEditComponent', () => {
  let component: ProjEditComponent;
  let fixture: ComponentFixture<ProjEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
