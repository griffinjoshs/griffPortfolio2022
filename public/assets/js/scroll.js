const hero = document.querySelector('.hero-section')
const flipOutAnimation = document.querySelector('.flip-out')
const aboutSec = document.getElementById('about')
const colorsSec = document.getElementById('colors')
const servicesSec = document.getElementById('services')
const testimonialBox = document.querySelector('.testimonial-box')

const scrollColors = () => {
    colorsSec.scrollIntoView()
}

const scrollAbout = () => {
    aboutSec.scrollIntoView()
}

const scrollPortfolio = () => {
    servicesSec.scrollIntoView()
}

const scrollDownToAbout = () => {
    hero.classList.add('swirlOutFwd');
    setTimeout(scrollAbout, 300);
    aboutSec.classList.add('slide-in');
}

const scrollDownToBlack = () => {
    hero.classList.remove('swirlOutFwd');
    aboutSec.classList.add('slideOutEllipticTopFwd')
    setTimeout(scrollPortfolio, 40);
    servicesSec.classList.add('swingInTopFwd')
} 