import { input } from './input';

const getValidationWithPasswords = (): [number[], string, string][] => input.split('\n').filter((i)=> i !== '').map(lineItem => {
    const array = lineItem.split(' ');
    const numbers = array.shift() || '';
    const [letter, password] = array;
    return [numbers.split('-').map((v)=> parseInt(v)), letter.replace(':', ''), password]
});

export const isValidAnswerOne = (numbers: number[], letter: string, password: string) => {
    const numberOfLettersInPassword = (password.match(new RegExp(letter, "g")) || []).length

    return numbers[0] <= numberOfLettersInPassword && numberOfLettersInPassword <= numbers[1]
}

export const answerOne = () => {
    return getValidationWithPasswords().reduce((memo, item)=> {
        if(isValidAnswerOne(...item)){
            return memo + 1
        }

        return memo;
    }, 0)
}

export const isValidAnswerTwo = (numbers: number[], letter: string, password: string) => {
    const [positionOne, positionTwo] = numbers;
    const charPositionOne = password[positionOne - 1];
    const charPositionTwo = password[positionTwo - 1];
    return (charPositionOne === letter || charPositionTwo === letter) && charPositionOne !== charPositionTwo;
}

export const answerTwo = () => {
    return getValidationWithPasswords().reduce((memo, item)=> {
        if(isValidAnswerTwo(...item)){
            return memo + 1
        }

        return memo;
    }, 0)
}

