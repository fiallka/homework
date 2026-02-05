// Задача 1.

const a = +prompt("Введите число")
if (a%2 === 0) {
    alert ("Число чётное");
} else {
    alert ("Число нечётное");
}

// Задача 2.

const age = +prompt("Введите возраст");
const discount = age<18 ? 10 : 18<=age && age <=65 ? 20 : 30 ;

alert (`скидка ${discount}%`)

// Задача 3.

const username = prompt("Введите имя пользователя");
const password = prompt("Введите пароль");

if ((username ==="admin" || username ==="user") && password ==="123456") {
    alert ("Доступ разрешён!");
} else {
    alert ("Доступ запрещён!");
}

// *Задача 4.

const x = +prompt("Укажите вес посылки (в кг)");
const y = prompt("Укажите тип доставки (Стандарт/Экспресс/Премиум)");

if (x<=0) {
    alert ('Некорректный вес посылки');
} else if (y !=="Стандарт" && y !=="Экспресс" && y !=="Премиум") {
    alert ('Неверный тип доставки');
} else {

const price = x<1 ? 5 : 1<=x && x <=5 ? 10 : 15 ;
let rate;
switch (y) {
    case "Стандарт":
    rate = 1;
    break;

    case "Экспресс":
    rate = 1.5;
    break;

    case "Премиум":
    rate = 2;
    break;
};

const final = price*rate;

alert (`Итоговая стоимость доставки ${final}$`);
}

