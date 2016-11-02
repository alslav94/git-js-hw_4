var num = prompt("Введите число");

function isEven(number) {
   var result = (Number.isInteger(number / 2));
    if (result == true) {
        return "Число четное";
    }
    else {
        return "Число нечетное";
    }
}