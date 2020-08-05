import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUniversityPanelComponent } from './search-university-panel.component';

describe('SearchUniversityPanelComponent', () => {
  let component: SearchUniversityPanelComponent;
  let fixture: ComponentFixture<SearchUniversityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUniversityPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUniversityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
