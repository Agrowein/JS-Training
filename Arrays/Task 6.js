/* Task 6  Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массим, 
           где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".*/

function employeeInfo(personnel) {
    const info = []
    personnel.forEach(el => info.push(`Имя: ${el.name} Возраст: ${el.age}`))
    return info
}
console.log(employeeInfo([{name: 'Иван', age: 23}, {name: "Лёха", age: 24}]));