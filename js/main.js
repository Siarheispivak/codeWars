// В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?

// Примеры
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Примечания
// Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.


function makeNegative(num) {
    return -Math.abs(num);



}



// Очень просто, по заданному целому числу или числу с плавающей запятой найти его противоположность.

// Примеры:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return number = (-number);
}


// Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

function removeChar(str) {
    return str.slice(1, -1);

};


// Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true, или "No"строку для false.

function boolToWord(bool) {
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}



// Завершите решение так, чтобы оно перевернуло переданную в него строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str.split("").reverse().join("");
}



// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr(n, s) {
    return s.repeat(n);
}



// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"


function numberToString(num) {
    value = String(num);
    return value;
}




// Суммирование
// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

// Например:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8



var summation = function (num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}




// Given an array of integers your solution should find the smallest integer.

// For example:

// Given[34, 15, 88, 2] your solution will return 2
// Given[34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.



class SmallestIntegerFinder {
    findSmallestInt(args) {
        let x = Math.min(args);
        return x;
    }

}




// Просто удалите пробелы из строки, затем верните результирующую строку.


function noSpace(x) {
    let s = x.split(' ').join('');
    return s
}






// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

// Например, for [1, 2, 2]это должно возвращаться , 9потому что 1^2 + 2^2 + 2^2 = 9.




function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2
    }
    return sum;
}





// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(arrayOfSheep) {
    let counter = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) counter += 1
    }
    return counter
}



// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5



function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true
    } else {
        return false;
    }
}






// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20







function century(year) {
    // Finish this :)
    return Math.ceil(year / 100);;
}










// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7




function basicOp(operation, value1, value2) {
    // Code
    if (operation == "+") {
        return value1 + value2
    }
    if (operation == "-") {
        return value1 - value2
    }
    if (operation == "*") {
        return value1 * value2
    }
    if (operation == "/") {
        return value1 / value2
    }
}