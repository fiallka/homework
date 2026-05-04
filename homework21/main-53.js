// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
];
users.push( { name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true } );
console.log(users);


// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
function getUserAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return sum / users.length;
}

const averageAge = getUserAverageAge(users);
console.log(averageAge);
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users) {
    const admins = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true) {
            admins.push(users[i]);
        }
    }
    return admins;
}

const admins = getAllAdmins(users);
console.log(admins);
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
    if (n === 0) return [];
    if (n === undefined) return [arr[0]];
    return arr.slice(0, n);
}
console.log(first(['q', 'w', 'e', 'r', 't', 'y'], 5));  
console.log(first([26, 23, 6, 22, 45], 0));  
console.log(first([5, 4, 3, 2, 1])); 