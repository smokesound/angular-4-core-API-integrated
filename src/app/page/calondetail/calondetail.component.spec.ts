import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalondetailComponent } from './calondetail.component';

describe('CalondetailComponent', () => {
  let component: CalondetailComponent;
  let fixture: ComponentFixture<CalondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
