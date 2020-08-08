import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckpaymentComponent } from './admin-checkpayment.component';

describe('AdminCheckpaymentComponent', () => {
  let component: AdminCheckpaymentComponent;
  let fixture: ComponentFixture<AdminCheckpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCheckpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
