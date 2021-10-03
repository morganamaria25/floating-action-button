import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBtnTwoComponent } from './dialog-btn-two.component';

describe('DialogBtnTwoComponent', () => {
  let component: DialogBtnTwoComponent;
  let fixture: ComponentFixture<DialogBtnTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBtnTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBtnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
