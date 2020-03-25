let imgApple = document.getElementById('replaceImg')
let steps = 0
let value = 0
let indicator = document.getElementById('errors')

let valueBtn = document.querySelector('.value-btn')
valueBtn.onclick = () => {
    switch (steps) {
        case 3:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/01/g,'02')
            imgApple.classList.toggle('img_apple')
            imgApple.classList.toggle('apple02') 
            changeValue(getRandomInt(1, 25))
            break;

        case 6:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/02/g,'03')
            imgApple.classList.toggle('apple02')
            imgApple.classList.toggle('apple03')
            changeValue(getRandomInt(25, 50))
            break;

        case 9:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/03/g,'04')
            imgApple.classList.toggle('apple03')
            imgApple.classList.toggle('apple04')
            changeValue(getRandomInt(50, 80))
            break; 

        case 12:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/04/g,'05')
            imgApple.classList.toggle('apple04')
            imgApple.classList.toggle('apple05')
            changeValue(getRandomInt(100, 101))
            break; 
        
        case 15:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/05/g,'06')
            imgApple.classList.toggle('apple05')
            imgApple.classList.toggle('apple06')
            indicator.src = indicator.src.replace(/correct/g,'error')
            indicator.classList.toggle('img_indicator-correct')
            indicator.classList.toggle('img_indicator-error')
            correct.pause()
            error.play()
            changeValue(getRandomInt(101, 200))
            break; 

        case 18:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/06/g,'07')
            imgApple.classList.toggle('apple06')
            imgApple.classList.toggle('apple07')
            changeValue(getRandomInt(200, 250))
            break; 

        case 21:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/07/g,'08')
            imgApple.classList.toggle('apple07')
            imgApple.classList.toggle('apple08')
            changeValue(getRandomInt(250, 300))
            break; 

        case 24:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/08/g,'09')
            imgApple.classList.toggle('apple08')
            imgApple.classList.toggle('apple09')
            changeValue(getRandomInt(300, 350))
            break; 

        case 27:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/09/g,'10')
            imgApple.classList.toggle('apple09')
            imgApple.classList.toggle('apple10')
            changeValue(getRandomInt(350, 400))
            break; 

        default:
            break;
    }
    changeShape()
    console.log(1,2,3);
}

// ---atoms' environment---

let stars = []
let rectangles = []
let speed
let cnv

function setup() {
    createCanvas(windowWidth, windowHeight)
    // mouseClicked(changeShape)
    for (var i = 0; i < 500; i++) {
        stars[i] = new Star()
    }
    frameRate(30)
    background(0)
    // noLoop()
}

function windowResized() {
    createCanvas(windowWidth, windowHeight)
    // mouseClicked(changeShape)
    for (var i = 0; i < 500; i++) {
        stars[i] = new Star()
    }
    frameRate(30)
    background(0)
    // noLoop()
}

function draw(progress) {
    speed = map(mouseX, 0, width, 0, 20)
    translate(width / 2, height / 2)
    background(0)
    for (var i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].display()
        stars[i].move()
    }
    for (var i = 0; i < rectangles.length; i++) {
        rectangles[i].update()
        rectangles[i].display()
        rectangles[i].move()
    }
}

// function mouseMoved() {
//     redraw(0.01)
// }
function mouseWheel() {
  noLoop();
  loop();
}

// --- Star settings ---

function Star() {
    this.x = random(-width, width)
    this.y = random(-height, height)
    this.z = random(width)
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)

    this.update = function () {
        this.z = this.z - 15
        if (this.z < 1) {
            this.z = width
            this.x = random(-width, width)
            this.y = random(-height, height)
        }
    }

    this.display = function () {
        var sx = map(this.x / this.z, 0, 1, 0, width)
        var sy = map(this.y / this.z, 0, 1, 0, height)
        stroke(this.r, this.g, this.b)
        strokeWeight(2)
        noFill()
        // fill(this.r, this.g, this.b)
        var r = map(this.z, 0, width, 50, 0)
        circle(sx, sy, r * 4)
    }

    this.move = function () {
        this.x = this.x + random(-2, 2)
        this.y = this.y + random(-2, 2)
    }
}

// --- Triangle settings ---

function changeShape() {
    if (value < 501) {
        console.log(value)
        for (var i = 0; i < 20; i++) {
            rectangles[value] = new Rect(mouseX, mouseY)
            stars.pop()
            value++
        }
        
    }
    steps++
    console.log(steps);  
}



function Rect() {
    this.x = random(-width, width)
    this.y = random(-height, height)
    this.z = random(width)
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)

    this.update = function () {
        this.z = this.z - 15

        if (this.z < 1) {
            this.z = width
            this.x = random(-width, width)
            this.y = random(-height, height)
        }
    }

    this.display = function () {
        var sx = map(this.x / this.z, 0, 1, 0, width)
        var sy = map(this.y / this.z, 0, 1, 0, height)
        stroke(this.r, this.g, this.b)
        strokeWeight(2)
        noFill()
        // fill(this.r, this.g, this.b)
        var r = map(this.z, 0, width, 50, 0)
        rect(sx, sy, r * 4, r * 4)
    }

    this.move = function () {
        this.x = this.x + random(-2, 2)
        this.y = this.y + random(-2, 2)
    }
}

// ---Text animation---

let text01 = new Typed('.p_textUp', {
    strings: ["ОБЪЕКТ:<br>ЯБЛОКО"],
    typeSpeed: 30
})

let text02 = new Typed('.p_textDownLeft', {
    strings: ["^800 СОСТОЯНИЕ:<br>ГЕОМЕТРИЧНОСТЬ"],
    typeSpeed: 30
})

let text03 = new Typed('.p_textDownRight', {
    strings: ["^2100 0%"],
    typeSpeed: 30
})

function changeValue(persentage) {
    new Typed('.p_textDownRight', {
        strings: ['',`${persentage}%`],
        typeSpeed: 30,
        smartBackspace: true
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min 
}

// ---indicatorAnimation---

let correct = anime({
    targets: '.img_indicator-correct',
    opacity: [1, 0],
    easing: 'easeInOutExpo',
    direction: 'alternate',
    duration: 500,
    delay: 500,
    loop: true
})

let error = anime({
    targets: '.img_indicator-correct',
    opacity: [1, 0],
    easing: 'easeInOutExpo',
    direction: 'alternate',
    duration: 240,
    delay: 0,
    loop: true,
    autoplay: false
})


