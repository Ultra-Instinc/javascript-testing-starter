import { describe, test, it, expect } from 'vitest'
import { fizzBuzz, max } from '../src/intro';

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // AAA pattern ::
        //Arrange : Prepare the case
        // const a = 5;
        // const b = 3;
        //Act : Do the Acction
        // const result = max(5, 3)
        //Assert : Verify The Result is correct
        // expect(result).toBe(5)
        expect(max(5, 3)).toBe(5)
    })

    it('should return the second argument if it is greater', () => {
        expect(max(3, 5)).toBe(5)
    })

    it('should return the first argument if arguments are equal', () => {
        expect(max(5, 5)).toBe(5)
    })
})

describe('fizzBuzz', () => {
    it('should return Fizz if the argument %3 = 0', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })
    it('should return Fizz if the argument %5 = 0', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })
    it('should return FizzBuzz if the argument %5 = 0 && %3 = 0 // %15=0', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })
    it('should return stringified argument if argument%3 !==0 && argument%5 !==0', () => {
        expect(fizzBuzz(31)).toBe('31')
    })
})