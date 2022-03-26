const socialContent = [
    {
        platform: 'LinkedIn',
        icon: '<i class="fa-brands fa-linkedin-in"></i>',
        link: '/' 
    },
    {
        platform: 'LinkedIn',
        icon: '<i class="fa-brands fa-linkedin-in"></i>',
        link: '/' 
    }
]
const socialsSection = document.getElementById('socialIcons')

const socialMediaIcons = () => {
    socialsSection.innerHTML = ''
    socialContent.map(
      (socialIcon) =>
        (socialsSection.innerHTML += `
        <div id='border'>
        <div class="social-icon" onmouseover='spinBorder()' onmouseout='stopSpin()'>
        ${socialIcon.icon}
        </div>
        </div>`
))}

const circleBorder = document.getElementById('border')

const spinBorder = () => {
    circleBorder.classList.add('rotate')
}

const stopSpin = () => {
    circleBorder.classList.remove('rotate')
}

socialMediaIcons()