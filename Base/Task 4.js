/* Task 4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */
function dayOfWeek(number) {
    const days = Array.from({0: 'Понедельник', 1: 'Вторник', 2: 'Среда', 3: 'Четверг', 4: 'Пятница', 5: 'Суббота', 6: 'Воскресенье', length: 7})
    return (number < 8 && number > 0) ? days[number-1] : 'Такого дня недели нет('
} 

console.log(dayOfWeek(1));
console.log(dayOfWeek(2));
console.log(dayOfWeek(3));
console.log(dayOfWeek(4));
console.log(dayOfWeek(5));
console.log(dayOfWeek(6));
console.log(dayOfWeek(7));
