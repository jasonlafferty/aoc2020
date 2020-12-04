import {
    answerOne, answerTwo,
} from '.';

describe('Day 1: Report Repair', () => {
    test('answerOne', () => {
        expect(answerOne(2020)).toEqual(838624);
    });

    test('answerTwo', () => {
        expect(answerTwo(2020)).toEqual(52764180);
    });
});
  