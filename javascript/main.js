let imgApple = document.getElementById('replaceImg')
let steps = 2


// imgApple.classList.remove
// imgApple.classList.add
// imgApple.classList.toggle
// }

let appleBtn = document.querySelector('section')
appleBtn.onclick = () => {
    switch (steps) {
        case 2:
            console.log(steps);
            imgApple.src = imgApple.src.replace(/01.png/g,'02.svg')
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

// ---anime---

let apple = document.querySelectorAll('.img_apple')

let appleScale = anime({
    targets: apple,
    scale: 15,
    easing: 'linear',
    autoplay: false
})

// ---magicScroll---

let controller = new ScrollMagic.Controller()

let appleScene = document.querySelector('section')

new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: appleScene.getBoundingClientRect().height
})
.addTo(controller)
.setPin(apple)
.on('progress', function(e) {
    appleScale.seek(appleScale.duration * e.progress)
})
