const hero = document.querySelector('.hero-section')
const flipOutAnimation = document.querySelector('.flip-out')
const colorsSec = document.getElementById('colors')
const servicesSec = document.getElementById('services')
const testimonialBox = document.querySelector('.testimonial-box')

const scrollColors = () => {
    colorsSec.scrollIntoView()
}

const scrollPortfolio = () => {
    servicesSec.scrollIntoView()
}

const scrollDownToColors = () => {
    hero.classList.add('swirlOutFwd');
    setTimeout(scrollColors, 300);
    colorsSec.classList.add('slide-in');
}

const scrollDownToBlack = () => {
    hero.classList.remove('swirlOutFwd');
    colorsSec.classList.add('slideOutEllipticTopFwd')
    setTimeout(scrollPortfolio, 40);
    servicesSec.classList.add('swingInTopFwd')
} 