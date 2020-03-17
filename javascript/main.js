// ---anime---

let apple = document.querySelector('.img_apple')

let appleScale = anime({
    targets: apple,
    // width: ['46vh', '90vh'],
    scale: 5,
    easing: 'linear',
    // top: '300vh',
    autoplay: false
})

// let appleBtn = document.querySelector('.img_apple')
// appleBtn.onclick = appleScale.play

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

// let controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onEnter',
//     }
// })
// let sectionScene = document.querySelector('div')

// let appleScene = new ScrollMagic.Scene({
//     triggerElement: sectionScene,
//     duration: 500
//     // duration: sectionScene.getBoundingClientRect().height
// })

// .setPin('.img_apple')
// .addTo(controller)

// // appleScene.oninput = e => {appleScale.seek(appleScale.duration * e.progress)}