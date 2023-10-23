
function guessValidate(guess){
    number = +guess

    if (Number.isNaN(number)){
        guessContainer.innerHTML += '<div>Valor inválido</div>'
    }

    if (guessRangeValidate(number)){
        guessContainer.innerHTML +=  `<div>Valor inválido, favor falar um número entre ${minValue} e ${maxValue}</div>`
    }

    if (number < secretNumber){
        guessContainer.innerHTML += '<div>Você errou, o valor é <i class="fa-solid fa-up-long"></i></div>'
    }

    if (number > secretNumber){
        guessContainer.innerHTML += '<div>Você errou, o valor é <i class="fa-solid fa-down-long"></i></div>'
    }

    if (number == secretNumber){
        document.body.innerHTML =`
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${secretNumber}</h3>
        <button id="restart" class="btn-restart">Jogar Novamente</button>`
    }
}


function guessRangeValidate(guess){
    return (guess > maxValue || guess < minValue)
}

document.body.addEventListener('click', (e)=>{
    if (e.target.id == 'restart'){
        window.location.reload()
    }
})