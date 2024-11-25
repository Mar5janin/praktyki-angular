import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAuthorIDComponent } from './get-author-id.component';

describe('GetAuthorIDComponent', () => {
  let component: GetAuthorIDComponent;
  let fixture: ComponentFixture<GetAuthorIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAuthorIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAuthorIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
