document.querySelector('.nav-burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-links-active');
    var burger = document.querySelector('.nav-burger span');
    if(burger.innerHTML=="menu"){
        burger.innerHTML = "close";
    }
    else{
        burger.innerHTML = "menu";
    }
})

gsap.from('.header-img', {
    delay: .5,
    duration: 2,
    x: -20,
    opacity: 0
})

gsap.from('.header-content p:first-of-type', {
    delay: 1.5,
    duration: 1.5,
    x: -20,
    opacity: 0
})

gsap.from('.header-content p:last-of-type', {
    delay: 2,
    duration: 1.5,
    x: -20,
    opacity: 0
})

gsap.from('.header-content button', {
    delay: 2.5,
    duration: 1.5,
    x: -20,
    opacity: 0
})

gsap.from('.nav-container', {
    delay: 3,
    duration: 1,
    y: -20,
    opacity: 0
})


gsap.from('.project-header', {
    scrollTrigger: {
        trigger: ".project-header",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    delay: 1,
    duration: 1,
    x: 20,
    opacity: 0
})


gsap.from(".project-item", {
    scrollTrigger: {
        trigger: ".project-item",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    duration: 1,
    x: 20,
    stagger: 0.5,
    opacity: 0
})


gsap.from(".skill-header", {
    scrollTrigger: {
        trigger: ".skill-header",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    duration: 1,
    y: -20,
    opacity: 0
})


gsap.from(".skill-about", {
    scrollTrigger: {
        trigger: ".skill-about",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    duration: 1,
    x: 20,
    opacity: 0
})

gsap.from(".skill", {
    scrollTrigger: {
        trigger: ".skill",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    duration: 1,
    x: -20,
    opacity: 0
})

gsap.from(".contact-header", {
    scrollTrigger: {
        trigger: ".contact-header",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    duration: 1,
    y: -20,
    opacity: 0
})

gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: ".contact-form",
        start: " bottom",
        markers: true,
        toggleActions: "restart pause restart none"
    },
    duration: 1,
    y: 20,
    opacity: 0
})



