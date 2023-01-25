'use strict'

// Возведение в степень
 
let userNumber = +prompt('Введите число')
let userSqrt = +prompt('Введите степень')
let result = userNumber

function getNumber(number, sqrt, res) {

  if(number === '' ||  sqrt === '') {
    alert('Пожалуйста, введите значения!')
  } else if(isNaN(number) || isNaN(sqrt)) {
    alert('Вы ввели неправильное значение!')
  } else if(number === 0 || sqrt === 0) {
    alert('Ноль не может быть задан как значение!')
  } else if(number === null || sqrt === null) {
    alert('Отменено!')
  } else {
    for(let i = 1; i < sqrt; i++) {
      res *= number
      console.log(res)
    }
  }

  return res
}

getNumber(userNumber, userSqrt, result)
