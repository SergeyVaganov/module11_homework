//Задание 3

/*Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function getFuncSum(num1) {
  const resultFunc = function(num2) {
    return num1 + num2
  }
  return resultFunc
}

let getSum = getFuncSum(10);
console.log( getSum(4) )

