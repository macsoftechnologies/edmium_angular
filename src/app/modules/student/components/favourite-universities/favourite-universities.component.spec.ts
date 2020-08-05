import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteUniversitiesComponent } from './favourite-universities.component';

describe('FavouriteUniversitiesComponent', () => {
  let component: FavouriteUniversitiesComponent;
  let fixture: ComponentFixture<FavouriteUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
