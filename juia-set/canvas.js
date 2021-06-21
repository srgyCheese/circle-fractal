import {Complex} from 'complex.js'

window.Complex = Complex

const canvas = document.getElementById("example")

canvas.height = 1000
canvas.width  = 1000

const centerX = canvas.width / 2
const centerY = canvas.height / 2

const ctx = canvas.getContext('2d')

function drawCircle(x, y, radius = 1) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = `green`
    ctx.fill()
}

function drawSquare(x, y, size = 2) {
    ctx.fillRect(x, y, size, size)
}

export function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function clearSquare(x, y, size) {
    ctx.clearRect(x, y, size, size)
}

export function drawFractal(xc, yc, iterations = 1, detalization = 20, size = 1) {
    let c = new Complex(xc, yc)
    
    for (let xi = -2; xi <= 2; xi += 1 / detalization) {
        setTimeout(() => {
            loop:
            for (let yi = -2; yi <= 2; yi += 1 / detalization) {
                let z = new Complex(xi, yi)

                let newZ = z.pow(3).add(c)
                
                for (let i = 0; i < iterations; i++) {
                    newZ = newZ.pow(3).add(c)

                    let newZAbs = newZ.abs()

                    if (newZAbs > (1 + Math.sqrt(1 + 4 * newZAbs)) / 2)  {
                        clearSquare(xi * detalization * size + centerX, yi * detalization * size + centerY, size)
                        continue loop
                    }
                }
        
                drawSquare(xi * detalization * size + centerX, yi * detalization * size + centerY, size)
            }
        }, 0)
        
    }
}