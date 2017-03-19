import { TestBed } from '@angular/core/testing';
import { UserAuthenticationComponent } from './user-authentication.component';

describe('Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [UserAuthenticationComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(UserAuthenticationComponent);
    expect(fixture.componentInstance instanceof UserAuthenticationComponent).toBe(true, 'should create UserAuthenticationComponent');
  });
});
