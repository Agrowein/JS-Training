/* Task 3 Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен" */
function gender(code) {
    code = code.toUpperCase()
    return `Ваш пол ${(code === 'M') ? 'мужской' : (code === 'F') ? "женский" : "неопределён" }`
}

console.log(gender('m'));
console.log(gender('f'));
console.log(gender('v'));