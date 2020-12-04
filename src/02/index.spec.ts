import {
    isValidAnswerOne,
    isValidAnswerTwo,
    answerOne,
    answerTwo,
} from '.';

describe('Day 2: Password Philosophy', () => {
    test('isValidAnswerOne test 1', () => {
        expect(isValidAnswerOne([1,3], 'a', 'abcde')).toBe(true);
    });

    test('isValidAnswerOne test 2', () => {
        expect(isValidAnswerOne([1,3], 'b', 'cdefg')).toBe(false);
    });

    test('isValidAnswerOne test 3', () => {
        expect(isValidAnswerOne([2,9], 'c', 'ccccccccc')).toBe(true);
    });

    test('answerOne', () => {
        expect(answerOne()).toEqual(569);
    });

    test('isValidAnswerTwo test 1', () => {
        expect(isValidAnswerTwo([1,3], 'a', 'abcde')).toBe(true);
    });

    test('isValidAnswerTwo test 2', () => {
        expect(isValidAnswerTwo([1,3], 'b', 'cdefg')).toBe(false);
    });

    test('isValidAnswerTwo test 3', () => {
        expect(isValidAnswerTwo([2,9], 'c', 'ccccccccc')).toBe(false);
    });

    test('answerTwo', () => {
        expect(answerTwo()).toEqual(346);
    });
});
  