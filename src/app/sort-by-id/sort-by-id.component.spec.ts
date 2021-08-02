import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByIDComponent } from './sort-by-id.component';

describe('SortByIDComponent', () => {
  let component: SortByIDComponent;
  let fixture: ComponentFixture<SortByIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
