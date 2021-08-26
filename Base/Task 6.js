/* Task  Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)*/

function greeting(name) {
    const hoursRange = new Map([
        [[0, 5], 'ночи'],
        [[6, 12], 'утро'],
        [[13, 19], 'день'],
        [[20, 24], 'вечер'] 
    ])
    const hour = new Date().getHours();
    
    for (key of hoursRange.keys()) {
        if (key[0] <= hour && key[1] >= hour) {
            return `Добрый ${hoursRange.get(key)}, ${name}!`
        }
    }
}

console.log(greeting("Артём"))