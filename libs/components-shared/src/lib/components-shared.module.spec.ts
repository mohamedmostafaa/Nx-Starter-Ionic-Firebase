import { async, TestBed } from '@angular/core/testing';
import { ComponentsSharedModule } from './components-shared.module';

describe('ComponentsSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsSharedModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentsSharedModule).toBeDefined();
  });
});
