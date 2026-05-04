// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
    Имя: "Алена",
    Фамилия: "На",
    Возраст: 24,
    Город: "Санкт-петербург",
};
console.log(`Имя: ${person.Имя}`);
console.log(`Фамилия: ${person.Фамилия}`);
console.log(`Возраст: ${person.Возраст}`);
console.log(`Город: ${person.Город}`);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
};
console.log(isEmpty(person)); 

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
    title: "Планы на выходные",
    description: "Поехать на дачу, сходить в лес",
    isCompleted: false
};
function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
}
const changes = {
    description: "Поехать на дачу, сходить в лес, увидеться с подругой",
    isCompleted: true
};
const newTask = cloneAndModify(task, changes);
for (let key in newTask) {
    console.log(newTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key]();
        }
    }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

callAllMethods(myObject);