import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './user-authentication.component';

describe('Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [LoginComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
  });
});
