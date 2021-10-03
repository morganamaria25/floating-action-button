import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBtnOneComponent } from './dialog-btn-one.component';

describe('DialogBtnOneComponent', () => {
  let component: DialogBtnOneComponent;
  let fixture: ComponentFixture<DialogBtnOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBtnOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBtnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
