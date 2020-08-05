import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySearchFilterComponent } from './university-search-filter.component';

describe('UniversitySearchFilterComponent', () => {
  let component: UniversitySearchFilterComponent;
  let fixture: ComponentFixture<UniversitySearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitySearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
