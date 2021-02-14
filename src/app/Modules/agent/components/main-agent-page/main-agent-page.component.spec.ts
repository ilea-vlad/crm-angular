import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAgentPageComponent } from './main-agent-page.component';

describe('MainAgentPageComponent', () => {
  let component: MainAgentPageComponent;
  let fixture: ComponentFixture<MainAgentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAgentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAgentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
