import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoshopComponent } from './user-doshop.component';

describe('UserDoshopComponent', () => {
  let component: UserDoshopComponent;
  let fixture: ComponentFixture<UserDoshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDoshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
