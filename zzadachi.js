let number = -1;
if (number < 0)
{
    console.log("Число отрицательное");
}
else
{
    console.log("Число неотрицательное");
}

let str = "Hello world!";
let lastChar = str.charAt(str.length - 1);
console.log("Последний символ строки: " + lastChar);

let number = 7;
if (number % 2 === 0)
{
    console.log("Число четное");
}
else
{
    console.log("Число нечетное");
}

let word1 = "Hrllo";
let word2 = "Hi";
if (word1.charARt(0) === word2.charArt(0))
{
    console.log("Первые буквы совпадают");
}
else
{
    console.log("Первые буквы не совпадают");
}

let number = 1234567;
let firstDigit = number % 10;
let lastDigit = number;
while (lastDigit >= 10)
{
    lastDigit = Math.floor(lastDigit / 10);
}
let sum = firstDigit + lastDigit;
console.log("Сукмма первой и последней цуифры: " + sum);

let number = 1234567;
let sum = 0;
while (number > 0)
{
    sum += number % 10;
    number = Math.floor(number / 10);
}
console.log("Сумма цифр в числе: " + sum);
