// ---anime---

let appleScale = anime({
    targets: '.img_apple',
    scale: 2,
    autoplay: false
})

let appleBtn = document.querySelector('.img_apple')
appleBtn.onclick = appleScale.play

// ---magicScroll---

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