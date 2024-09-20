// Lesson: Writing your first tests
// export function max(a, b) {
//   if (a > b) return a;
//   else if (b > a) return b;
//   return a;
// }
export function max(a, b) {
  return (a > b) ? a : b
}

// Exercise
export function fizzBuzz(n) {
  // if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  // if (n % 3 === 0) return 'Fizz';
  // if (n % 5 === 0) return 'Buzz';
  // return n.toString();
  return (n % 15 === 0) ? 'FizzBuzz' :
    (n % 3 === 0) ? 'Fizz' :
      (n % 5 === 0) ? 'Buzz' : n.toString();
}
