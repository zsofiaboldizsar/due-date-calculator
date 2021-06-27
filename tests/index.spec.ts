import { assert } from 'chai';
import { calculateDueDate } from '../index';

describe.only('calculateDueDate()', () => {

  const FAKE_DATE = new Date('2021-06-29 16:01:08');
  const turnaroundTime = 16;

  it('happy path - should return with due date', () => {
    const expectedResult = new Date('2021-07-01 16:01:08');
    const acutalResult = calculateDueDate(FAKE_DATE, turnaroundTime);

    assert.deepEqual(acutalResult, expectedResult);
  });

  it('should return error message if submission date is outside of working hours', () => {
    const weekendSubmissionDate = new Date('2021-06-27 16:01:08');
    let result = null;
    let expectedError: Error = null;
    try {
      result = calculateDueDate(weekendSubmissionDate, turnaroundTime);
    } catch (error) {
      expectedError = error;
    }

    assert.isNull(result);
    /* assert.isNotNull(expectedError);
    assert.isTrue(expectedError.message.startsWith('Please submit your issue during working hours')); */

  });
  /* it('should throw error if turnaround time is not a number', () => {
    let result = null;
    let expectedError: Error = null;
    try {
      result = calculateDueDate(submissiontDate, '16');
    } catch (error) {
      expectedError = error;
    }

    assert.isNull(result);
    assert.isNotNull(expectedError);
    assert.isTrue(expectedError.message.startsWith('Please provide a number for the turnaround time.'));

  }); */
});