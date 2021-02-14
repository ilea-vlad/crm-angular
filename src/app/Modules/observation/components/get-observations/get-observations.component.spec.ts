import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetObservationsComponent } from './get-observations.component';

describe('GetObservationsComponent', () => {
  let component: GetObservationsComponent;
  let fixture: ComponentFixture<GetObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
