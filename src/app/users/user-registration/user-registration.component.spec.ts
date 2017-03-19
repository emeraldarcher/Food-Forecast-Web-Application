import { TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';

describe('Registration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [UserRegistrationComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(UserRegistrationComponent);
    expect(fixture.componentInstance instanceof UserRegistrationComponent).toBe(true, 'should create UserRegistrationComponent');
  });
});
