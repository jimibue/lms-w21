let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// go through an array of number and print them out
// /3 fizz
// /5 buzz
// 15 fizzbuz

const fizzBuzz = (arr) => {
  arr.forEach((num) => {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("fizzbuzz");
    } else if (num % 5 === 0) {
      console.log("buzz");
    } else if (num % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(num);
    }
  });
};

fizzBuzz(nums);
