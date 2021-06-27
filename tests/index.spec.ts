import { assert } from 'chai';
import { calculateDueDate } from '../index';

describe('calculateDueDate()', () => {
  const turnaroundTime = 16;

  it('happy path - should return with due date', () => {
    const expectedResult = new Date('2021-07-01 16:01:08');
    const acutalResult = calculateDueDate(new Date('2021-06-29 16:01:08'), turnaroundTime);

    assert.deepEqual(acutalResult, expectedResult);
  });

  it('should throw error if submission date is outside of working hours', () => {
    const weekendSubmissionDate = new Date('2021-06-27 16:01:08');
    let result = null;
    let expectedError: Error = null;
    try {
      result = calculateDueDate(weekendSubmissionDate, turnaroundTime);
    } catch (error) {
      expectedError = error;
    }

    assert.isNull(result);
    assert.isNotNull(expectedError);
    assert.isTrue(expectedError.message.startsWith('Please submit your issue during working hours'));
  });
});