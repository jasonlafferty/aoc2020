import { input } from './input';

export const answerOne = (target: number) => {
    for(const [index1, number1] of input.entries()){
        for(const [index2, number2] of input.entries()){
            if((number1 + number2) === target){
                return number1 * number2
            }
        }
    }
}

export const answerTwo = (target: number) => {
    for(const [index1, number1] of input.entries()){
        for(const [index2, number2] of input.entries()){
            for(const [index3, number3] of input.entries()){
                if((number1 + number2 + number3) === target){
                    return number1 * number2 * number3;
                }
            }
        }
    }
}