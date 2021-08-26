/* Task 3 Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15]) */
function multiplicityFive(array) {
    return array.filter(e => e % 5 === 0) 
}

console.log(multiplicityFive([1,2,5,12,15,21]));
