import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CracEmpComponent } from './carac-emp.component';

describe('CracEMpComponent', () => {
  let component: CracEmpComponent;
  let fixture: ComponentFixture<CracEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CracEmpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CracEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
