import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedUniversitiesComponent } from './interested-universities.component';

describe('InterestedUniversitiesComponent', () => {
  let component: InterestedUniversitiesComponent;
  let fixture: ComponentFixture<InterestedUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
