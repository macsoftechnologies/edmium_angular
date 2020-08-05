import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUniversitiesListComponent } from './student-universities-list.component';

describe('StudentUniversitiesListComponent', () => {
  let component: StudentUniversitiesListComponent;
  let fixture: ComponentFixture<StudentUniversitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUniversitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUniversitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
