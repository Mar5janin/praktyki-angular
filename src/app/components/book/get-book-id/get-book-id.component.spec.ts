import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookIdComponent } from './get-book-id.component';

describe('GetBookIdComponent', () => {
  let component: GetBookIdComponent;
  let fixture: ComponentFixture<GetBookIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBookIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
