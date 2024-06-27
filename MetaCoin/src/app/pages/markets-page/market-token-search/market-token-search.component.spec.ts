import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTokenSearchComponent } from './market-token-search.component';

describe('MarketTokenSearchComponent', () => {
  let component: MarketTokenSearchComponent;
  let fixture: ComponentFixture<MarketTokenSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketTokenSearchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarketTokenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
