import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditshopComponent } from './user-editshop.component';

describe('UserEditshopComponent', () => {
  let component: UserEditshopComponent;
  let fixture: ComponentFixture<UserEditshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
