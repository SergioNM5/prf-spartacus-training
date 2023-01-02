import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfSplitViewBannerComponent } from './prf-split-view-banner.component';

describe('PrfSplitViewBannerComponent', () => {
  let component: PrfSplitViewBannerComponent;
  let fixture: ComponentFixture<PrfSplitViewBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrfSplitViewBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfSplitViewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
