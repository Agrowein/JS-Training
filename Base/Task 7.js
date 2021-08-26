/* Task 7  Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый*/

function ageCategory() {
    for (let i = 1; i <= 100; i++) {
        let category;
        if (i < 18) {
            category = 'ребенок';
        } else if(i < 30 && i >= 18) {
            category = 'молодой';
        } else if (i < 55 && i >= 30) {
            category = 'зрелый';
        } else if (i >= 55) {
            category = 'старый';
        } else {
            category = 'вне времени';
        }
        console.log(`${i} - ${category}`);
    }
}

ageCategory()