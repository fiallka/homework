// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90


function calculateFinalPrice(basePrice, discountPercent, taxPercent) {
    let discountAmount = basePrice * (discountPercent / 100);
    let priceAfterDiscount = basePrice - discountAmount;
    let taxAmount = priceAfterDiscount * taxPercent;
    let finalPrice = priceAfterDiscount + taxAmount;
    return finalPrice;
}

let basePrice = parseFloat(prompt("Введите базовую цену товара"));
let discountPercent = parseFloat(prompt("Введите процент скидки"));
let taxPercent = parseFloat(prompt("Введите налоговую ставку (0, 0.1, 0.2 и т.д):"));

let finalPrice = calculateFinalPrice(basePrice, discountPercent, taxPercent);
alert("Итоговая цена товара" + finalPrice);



// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

let username = prompt("Введите имя пользователя");
let password = prompt("Введите пароль");

let result = checkAccess(username, password);

alert(result);




// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(hour) {
    if (hour < 0 || hour > 23) {
        return "Некорректное время";
    }

    if (hour >= 0 && hour <= 5) {
        return "Ночь";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else { 
        return "Вечер";
    }
}

let hour = parseInt(prompt("Введите текущий час (число от 0 до 23"));

let itog = getTimeOfDay(hour);

alert(itog);



// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i; 
        }
    }
    return "Чётных чисел нет";
}

let start = parseInt(prompt("Введите начало диапазона:"));
let end = parseInt(prompt("Введите конец диапазона:"));

let finish = findFirstEven(start, end);

alert(finish);