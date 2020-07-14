const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percentages = document.querySelector('.percentage')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

inputpercentages = (percent) => {
    if(currentNumber.includes('%')){
        return
    }
    currentNumber = currentNumber/100
}

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const inputNumber = (number) => {
    if (currentNumber === '0')
    {
    currentNumber = number
    }
    else
    {
    currentNumber += number
    }
}
const updateScreen = (number) => {
    calculatorScreen.value = number
}
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        console.log(number)
        console.log('number is pressed')
        console.log(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    }) 
})
operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

percentages.addEventListener('click', (event) =>{
    console.log(event.target.value)
    inputpercentages(event.target.value)
    updateScreen(currentNumber)
})