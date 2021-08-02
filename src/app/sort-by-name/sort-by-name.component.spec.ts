import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByNameComponent } from './sort-by-name.component';

describe('SortByNameComponent', () => {
  let component: SortByNameComponent;
  let fixture: ComponentFixture<SortByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
