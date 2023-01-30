//     Написать программу FizzBuzz: программа должны вывести числа от 1 до 100 по следующим правилам.
//     Если число делится на 3 то вывести Fizz, если число делится на 5 вывести Buzz, если делится
//     и на 3 и на 5, то вывести FizzBuzz, иначе вывести просто число.
//     Например: 1 2 Fizz 4 Buzz и т.д.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(`${i} - FizzBuzz`);
        else if (i % 5 === 0) console.log(`${i} - Buzz`);
        else if (i % 3 === 0) console.log(`${i} - Fizz`);
    }
}
fizzBuzz();
