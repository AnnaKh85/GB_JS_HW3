"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

function calculateNetSalary(grossSalary) {
  const taxRate = 0.13;
  const netSalary = grossSalary * (1 - taxRate);
  return netSalary;
}

const userInput = parseFloat(prompt("Введите вашу заработную плату:"));

if (!isNaN(userInput)) {
  const netSalary = calculateNetSalary(userInput);
  console.log(`Размер заработной платы за вычетом налогов равен ${netSalary}.`);
} else {
  console.log("Значение задано неверно.");
}