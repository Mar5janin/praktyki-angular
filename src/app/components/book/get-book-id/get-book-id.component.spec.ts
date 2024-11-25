import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookIDComponent } from './get-book-id.component';

describe('GetBookIDComponent', () => {
  let component: GetBookIDComponent;
  let fixture: ComponentFixture<GetBookIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBookIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
