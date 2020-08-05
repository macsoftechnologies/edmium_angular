import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUniversitiesComponent } from './list-of-universities.component';

describe('ListOfUniversitiesComponent', () => {
  let component: ListOfUniversitiesComponent;
  let fixture: ComponentFixture<ListOfUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
