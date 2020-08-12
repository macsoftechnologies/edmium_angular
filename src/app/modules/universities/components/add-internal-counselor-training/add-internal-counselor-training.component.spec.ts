import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInternalCounselorTrainingComponent } from './add-internal-counselor-training.component';

describe('AddInternalCounselorTrainingComponent', () => {
  let component: AddInternalCounselorTrainingComponent;
  let fixture: ComponentFixture<AddInternalCounselorTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInternalCounselorTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInternalCounselorTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
