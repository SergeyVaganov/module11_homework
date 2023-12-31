//Задание 4

/*Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. 
Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).*/

function printConsol( start, end ) {
  function counter( start, end ) {
    let count = start;
    let maxCount = end;
    function counterInternal() {
      console.log(count++);
      if (count > maxCount) {
        clearInterval(intervalId)
      }
    }
    return counterInternal;
  }
  const intervalId = setInterval(counter( start, end ), 1000);
}

printConsol(5,15)