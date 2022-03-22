const siteInfo = document.getElementById('site-info')
const giantButtonSec = document.querySelector('.giant-button-info')
const slideRight = document.querySelector('.slide-right')
const portfolioSection = document.querySelector('.portfolio-section')
const codeIcon = "<ion-icon name='code-slash-outline' class='card-icon'></ion-icon>"
const buttonIcon = document.querySelector('.button-Icon')


const Projects = [
    {
        title: 'i-75 CPA Review Website',
        icon: codeIcon,
        text: 'Landing page for the #1 CPA Review Course on the Market',
        link: 'https://cpaexamtutoring.com/'
    }
]

const showProjects = () => {
    Projects.map((projectInfo, i) => (
        portfolioSection.innerHTML += `
        
        `
        ))
}

const slideArrow = () => {
  buttonIcon.classList.add('slide-right')
}

showProjects()

