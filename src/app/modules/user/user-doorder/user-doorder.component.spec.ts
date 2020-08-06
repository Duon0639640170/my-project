import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoorderComponent } from './user-doorder.component';

describe('UserDoorderComponent', () => {
  let component: UserDoorderComponent;
  let fixture: ComponentFixture<UserDoorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDoorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
