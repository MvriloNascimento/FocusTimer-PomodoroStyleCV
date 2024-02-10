import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonFire,
  buttonCofee,
  buttonLux,
  buttonDarkk,
  mode,
  sliderForest,
  sliderCofee,
  sliderFire,
  sliderRain,
  sliderCel,
  backgroundForest,
  backgroundCofee,
  backgroundFire,
  backgroundRain
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonCofee,
  buttonFire,
  buttonRain,
  buttonLux,
  buttonDarkk,
  mode,
  sliderForest,
  sliderCofee,
  sliderFire,
  sliderRain,
  sliderCel,
  backgroundForest,
  backgroundCofee,
  backgroundFire,
  backgroundRain,
  buttonRain
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})