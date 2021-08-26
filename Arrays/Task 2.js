/* Task  Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.*/
function containsSomeOdd(array) {
    return array.some(e => e % 2 !== 0)
}

console.log(containsSomeOdd([2, 2, 4, 6]));