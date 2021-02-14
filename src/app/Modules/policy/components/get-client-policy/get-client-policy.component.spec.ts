import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientPolicyComponent } from './get-client-policy.component';

describe('GetClientPolicyComponent', () => {
  let component: GetClientPolicyComponent;
  let fixture: ComponentFixture<GetClientPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetClientPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
