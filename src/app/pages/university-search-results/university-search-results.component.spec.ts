import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySearchResultsComponent } from './university-search-results.component';

describe('UniversitySearchResultsComponent', () => {
  let component: UniversitySearchResultsComponent;
  let fixture: ComponentFixture<UniversitySearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitySearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
