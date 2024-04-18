// let userNum = prompt("Введите любое число:")
// let percentNum = (userNum) * 0.1
// console.log("10% от введенного числа - ", percentNum)

// let num1 = prompt("Введите первое число:")
// let num2 = prompt("Введите второе число:")
// if (Number(num1) < Number(num2)) {console.log("Наименьшее число - ", num1)} else {console.log("Наименьшее число - ", num2)}

// let userNumber = prompt("Введите число")
// if (Number(userNumber)< 100) {
// console.log("Число меньше 100")
// }
// else if (Number(userNumber)> 100) {
// console.log("Число больше 100")
// }
// else {
//     console.log("Число равно 100")
// }

let Name
let Age

Name = prompt("Введите ваше имя:")

while (true) {
    Age = prompt("Введите ваш возраст в числовом формате:")

    if (isNaN(Age)) {
        alert("Пожалуйста, введите ваш возраст в числовом формате.")
    } else {
        break 
    }
}

if (Number(Age) >= 18) {
    console.log('Hello ', Name)
} else {
    console.log('Hi ', Name)
}