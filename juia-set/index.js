import {drawFractal, clear} from './canvas'

const xinput = document.querySelector('#xvalue')
const yinput = document.querySelector('#yvalue')
const iterationsRange = document.querySelector('#iterations')

const coords = document.querySelector('#coords')

doAll()

function displayCoords() {
    coords.innerHTML = `${xinput.value}, ${yinput.value}, iterations: ${iterationsRange.value}`
}

function doAll() {
    drawFractal(+xinput.value, +yinput.value, iterationsRange.value, 400)

    displayCoords()
}

xinput.addEventListener('change', doAll)
yinput.addEventListener('change', doAll)
iterationsRange.addEventListener('change', doAll)


xinput.addEventListener('input', displayCoords)
yinput.addEventListener('input', displayCoords)
iterationsRange.addEventListener('input', displayCoords)