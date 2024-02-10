import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonLux,
    buttonDarkk,
    buttonForest,
    buttonCofee,
    buttonFire,
    buttonRain
} from "./elements.js"
  
  export default function({controls, timer, sound}) {
  
    buttonPlay.addEventListener('click', function() {
      controls.play()
      timer.countdown()
      sound.pressButton()
    })
  
    buttonPause.addEventListener('click', function() {
      controls.pause()
      timer.hold()
      sound.pressButton()
    })
  
    buttonStop.addEventListener('click', function() {
      controls.reset()
      timer.reset()
      sound.pressButton()
    })

    buttonLux.addEventListener('click', function() {
      controls.changeDarkk()
      sound.pressButton()
    })

    buttonDarkk.addEventListener('click', function() {
      controls.changeLux()
      sound.pressButton()
    })

    buttonPlus.addEventListener('click', function() {
      sound.pressButton()  
      timer.increase()
    })

    buttonMinus.addEventListener('click', function() {
      sound.pressButton()
      timer.decrease()
    })

    buttonForest.addEventListener('click', function() {
      controls.forest()
      sound.soundForest()
    })

    buttonFire.addEventListener('click', function() {
      controls.fire()
      sound.soundFire()
    })

    buttonRain.addEventListener('click', function() {
      controls.rain()
      sound.soundRain()
    })

    buttonCofee.addEventListener('click', function() {
      controls.cofee()
      sound.soundCofeeHouse()
    })
  
  }