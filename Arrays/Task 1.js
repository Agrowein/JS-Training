/* Task 1 Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false. */

function containsEveryEven(array) {
    return array.every(e => e % 2 === 0)
}

console.log(containsOdd([2,4,6]));