/* Task 4  Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)*/

function arithmeticMean(array) {
    return +(array.reduce((a, b) => a + b)/array.length).toFixed(1)
}
console.log(arithmeticMean([1.901,2,5,41,5, 102]));