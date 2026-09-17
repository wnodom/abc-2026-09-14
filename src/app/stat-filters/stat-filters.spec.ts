import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatFilters } from './stat-filters';

describe('StatFilters', () => {
  let component: StatFilters;
  let fixture: ComponentFixture<StatFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(StatFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
