import { assert } from 'chai';
import { isValidSumbissionDate } from '../../src/util';

describe('isValidSumbissionDate', () => {
  it('happy path - should return true as submission date and time within valid range', () => {
    const submissionDate = new Date('2021-06-29 16:59:59');
    const actualResult = isValidSumbissionDate(submissionDate);

    assert.isTrue(actualResult);
  });

  it('should return false as submission date is outsie of valid range - Sunday', () => {
    const submissionDate = new Date('2021-06-27 16:01:08');
    const actualResult = isValidSumbissionDate(submissionDate);

    assert.isFalse(actualResult);
  });

  it('should return false as submission time is outsie of valid range - 17:00', () => {
    const submissionDate = new Date('2021-06-29 17:00:00');
    const actualResult = isValidSumbissionDate(submissionDate);

    assert.isFalse(actualResult);
  });

  it('should return false as submission time is outsie of valid range - 08:59', () => {
    const submissionDate = new Date('2021-06-29 08:59:59');
    const actualResult = isValidSumbissionDate(submissionDate);

    assert.isFalse(actualResult);
  });
});