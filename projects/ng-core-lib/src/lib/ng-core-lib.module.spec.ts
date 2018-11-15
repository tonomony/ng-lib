import { NgCoreLibModule } from './ng-core-lib.module'

describe('LibModule', () => {
  let libModule: NgCoreLibModule;

  beforeEach(() => {
    libModule = new NgCoreLibModule();
  });

  it('should create an instance', () => {
    expect(libModule).toBeTruthy();
  });
});
