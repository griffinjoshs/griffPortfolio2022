const siteInfo = document.getElementById('site-info')
const giantButtonSec = document.querySelector('.giant-button-info')
const slideRight = document.querySelector('.slide-right')
const portfolioBoxSec = document.querySelector('.portfolio-boxes')
const codeIcon = "<ion-icon name='code-slash-outline' class='card-icon'></ion-icon>"
// const buttonIcon = document.querySelector('.button-Icon')
const buttonColor = document.querySelector('.portfolio-box button')


const Projects = [
    {
        title: 'i-75 CPA Review Website',
        icon: codeIcon,
        text: 'Landing page for the #1 CPA Review Course on the Market',
        link: 'https://cpaexamtutoring.com/'
    },
    {
        title: 'i-75 CPA Review Website',
        icon: codeIcon,
        text: 'Landing page for the #1 CPA Review Course on the Market',
        link: 'https://cpaexamtutoring.com/'
    }
]

const showProjects = () => {
    Projects.map((projectInfo, i) => (
        portfolioBoxSec.innerHTML += `
        <div class="portfolio-box" onmouseover="slideColor()" >
        <div class="port-box-left">
        <h3>${projectInfo.title}</h3>
        <p>
        ${projectInfo.text}
        </p>
        <a href='/'><button>See Website</button></a>
        <br>
      </div>
      <div class="port-box-right">
        <h2>${projectInfo.icon}</h2>
      </div>
      </div>
        `
        ))
}

const slideColor = () => {
  buttonColor.style.color = 'white'
}

showProjects()

