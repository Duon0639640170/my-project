import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpparcelComponent } from './admin-upparcel.component';

describe('AdminUpparcelComponent', () => {
  let component: AdminUpparcelComponent;
  let fixture: ComponentFixture<AdminUpparcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpparcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpparcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
