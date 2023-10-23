window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const guessContainer = document.getElementById('guess')

var recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    let guess = e.results[0][0].transcript
    showGuess(guess)
    guessValidate(guess)
    
}

function showGuess(guess){
    guessContainer.innerHTML = `
    <div>Você Disse</div>
    <span class="box">${guess}</span>`
}


recognition.addEventListener('end', ()=>recognition.start())
