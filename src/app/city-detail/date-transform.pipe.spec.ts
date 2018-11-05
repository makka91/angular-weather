import { DateTransformPipe } from './date-transform.pipe';

describe('Pipe: Default', () => {
  let pipe: DateTransformPipe;

  beforeEach(() => {
    pipe = new DateTransformPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
 
  it('should contain array', () => {
    expect(pipe.transform([])).toEqual([]);
  });

  });