const minValue = 1
const maxValue = 100
const secretNumber = randomGenerate(minValue, maxValue)
const minValueContainer = document.getElementById('min-value')
const maxValueContainer = document.getElementById('max-value')


function randomGenerate(minValue, maxValue){
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
}


console.log(secretNumber)

minValueContainer.textContent = minValue
maxValueContainer.textContent = maxValue