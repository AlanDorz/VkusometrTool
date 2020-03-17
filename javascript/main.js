// ---anime---

let apple = document.querySelector('.img_apple')

let appleScale = anime({
    targets: apple,
    scale: 5,
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
