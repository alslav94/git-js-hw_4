"use strict";

var num1 = prompt("Введите первое число");
var num2 = prompt("Введите второе число");

function min(number_1, number_2) {
    var result = (number_1 < number_2);
    if (result == true) {
        return "Наименьшее число: " + number_1;
    }
    else {
        return "Наименьшее число: " + number_2;
    }
}