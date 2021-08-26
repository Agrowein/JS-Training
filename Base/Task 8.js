/* Task 8  Создай новую функцию, в которую передаешь имя и возраст человека и 
           получаешь сообщение (Иван имеет возраст 44 и он зрелый). 
           А также вызови внутри своей функции, функцию из прошлого задания*/


function userInfo(name, age) {
    const categories = new Map([
        [[0, 18], 'ребёнок'],
        [[18, 30], 'молодой'],
        [[30, 55], 'зрелый'],
        [[55, Infinity], 'старый']
    ])
    
    for (key of categories.keys()) {
        if (key[0] <= age && key[1] > age) {
            console.log(`${name} имеет возраст ${age} лет и он ${categories.get(key)}`);
        }
    }

    ageCategory()
}

userInfo('Артём', 20)

// Task 7 solution
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