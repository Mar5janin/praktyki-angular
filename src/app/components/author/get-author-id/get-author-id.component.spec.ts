import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAuthorIdComponent } from './get-author-id.component';

describe('GetAuthorIdComponent', () => {
  let component: GetAuthorIdComponent;
  let fixture: ComponentFixture<GetAuthorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAuthorIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAuthorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
