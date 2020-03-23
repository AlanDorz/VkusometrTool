let imgApple = document.getElementById('replaceImg')
let steps = 2

let appleBtn = document.querySelector('div')
appleBtn.onclick = () => {
    switch (steps) {
        case 2:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/01/g,'02')
            imgApple.classList.toggle('img_apple')
            imgApple.classList.toggle('apple02') 
            steps++
            break;

        case 3:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/02/g,'03')
            imgApple.classList.toggle('apple02')
            imgApple.classList.toggle('apple03')
            steps++
            break;

        case 4:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/03/g,'04')
            imgApple.classList.toggle('apple03')
            imgApple.classList.toggle('apple04')
            steps++
            break; 

        case 5:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/04/g,'05')
            imgApple.classList.toggle('apple04')
            imgApple.classList.toggle('apple05')
            steps++
            break; 
        
        case 6:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/05/g,'06')
            imgApple.classList.toggle('apple05')
            imgApple.classList.toggle('apple06')
            steps++
            break; 

        case 7:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/06/g,'07')
            imgApple.classList.toggle('apple06')
            imgApple.classList.toggle('apple07')
            steps++
            break; 

        case 8:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/07/g,'08')
            imgApple.classList.toggle('apple07')
            imgApple.classList.toggle('apple08')
            steps++
            break; 

        case 9:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/08/g,'09')
            imgApple.classList.toggle('apple08')
            imgApple.classList.toggle('apple09')
            steps++
            break; 

        case 10:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/09/g,'10')
            imgApple.classList.toggle('apple09')
            imgApple.classList.toggle('apple10')
            steps++
            break; 

        default:
            break;
    }
    
    console.log(1,2,3);
}

// ---atoms' environment---

let stars = []
let rectangles = []
let speed
let value = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    for (var i = 0; i < 500; i++) {
        stars[i] = new Star()
    }
    frameRate(30)
    background(0)
    // noLoop()
}

function windowResized() {
    createCanvas(windowWidth, windowHeight)
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

function mouseClicked() {
    if (value < 501) {
        console.log(value)
        for (var i = 0; i < 20; i++) {
            rectangles[value] = new Rect(mouseX, mouseY)
            value++
            stars.pop()
        }
    }
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

// ---anime---

// let apple = document.querySelectorAll('.img_apple')

// let appleScale = anime({
//     targets: apple,
//     scale: 18,
//     easing: 'linear',
//     autoplay: false
// })

// // ---magicScroll---

// let controller = new ScrollMagic.Controller()

// let appleScene = document.querySelector('div')

// new ScrollMagic.Scene({
//     triggerElement: 'div',
//     duration: appleScene.getBoundingClientRect().height
// })
// .addTo(controller)
// .setPin(apple)
// .on('progress', function(e) {
//     appleScale.seek(appleScale.duration * e.progress)
// })
