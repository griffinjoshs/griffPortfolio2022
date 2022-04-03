const navbar = document.getElementById('navbar')
const hamburgerIcon = "<ion-icon name='menu-outline' onclick='displayMenu()'></ion-icon>"
const closeIcon = "<ion-icon name='close-outline' onclick='exitMenu()'></ion-icon>"
const scrollTopIcon = '<ion-icon name="arrow-up-circle-outline"></ion-icon>'
const hambButton = document.getElementById('hamburger')
const closeButton = document.getElementById('close')
const menu = document.getElementById('menu')
// const website = document.getElementById('wholeWebsite')
const underNav = document.getElementById('underNav')

const loadnav = () => {
     navbar.innerHTML += `<div class="navbar-left" onclick='backHome()'>
    <div class="shape-logo bounce-in-top">
      <div class="circle">
        <div class="square">
          <div class="diamond"></div>
        </div>
      </div>
    </div>
    <div class="name-logo">
        <h2>Griffin</h2>
    </div>
  </div>
  <div class="navbar-right">
  <button class='icon' id='hamburger'>
  ${hamburgerIcon}
  </button>
  <button class='icon hide' id='close'>
  ${closeIcon}
  </button>
  <button class='icon hide' id='scrollTop'>
  ${scrollTopIcon}
  </button>
  </div>`
}

const loadMenu = () => {
  menu.innerHTML += 
  `<ul>
    <li onclick='backHome()'>Home</li>
    <li onclick='goToContact()'>Contact</li>
    <li onclick='goToHire()'>Hire Me</li>
    <li onclick='goToServices()'>Services</li>
  </ul>`
}

const AfterAnimation1 = () => {
  document.body.classList.remove('animate')
  document.getElementById('menu').classList.remove('hide')
  document.getElementById('hamburger').classList.add('hide')
  document.getElementById('close').classList.remove('hide')
  document.querySelector('.icon').classList.remove('spin')
}

// const AfterAnimation2 = () => {
//   document.body.classList.remove('animate')
//   document.getElementById('menu').classList.add('hide')
//   document.getElementById('hamburger').classList.remove('hide')
//   document.getElementById('close').classList.add('hide')
//   document.querySelector('.icon').classList.remove('spin')
// }

const PageSwitchAnimation = () => {
  document.getElementById('menu').classList.add('hide')
  underNav.classList.add('hide')
  document.body.classList.add('animate')
  document.querySelector('.icon').classList.add('spin')
}

const displayMenu = () => {
  PageSwitchAnimation()
  setTimeout(AfterAnimation1, 4500)
}

const exitMenu = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    underNav.classList.remove('hide')
    document.getElementById('hamburger').classList.remove('hide')
    document.getElementById('close').classList.add('hide')
    document.querySelector('.icon').classList.remove('spin')
    document.body.classList.remove('animate')
  }, 4500)
}

const backHome = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    // underNav.classList.remove('hide')
    // document.getElementById('hamburger').classList.remove('hide')
    // document.getElementById('close').classList.add('hide')
    // document.querySelector('.icon').classList.remove('spin')
    // document.body.classList.remove('animate')
    window.location.href="/";
  }, 4500)
}

const goToContact = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    underNav.classList.remove('hide')
    document.getElementById('hamburger').classList.remove('hide')
    document.getElementById('close').classList.add('hide')
    document.querySelector('.icon').classList.remove('spin')
    document.body.classList.remove('animate')
    window.location.href="/contact";
  }, 4500)
}

const goToHire = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    underNav.classList.remove('hide')
    document.getElementById('hamburger').classList.remove('hide')
    document.getElementById('close').classList.add('hide')
    document.querySelector('.icon').classList.remove('spin')
    document.body.classList.remove('animate')
    window.location.href="/hire";
  }, 4500)
}

const goToServices = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    underNav.classList.remove('hide')
    document.getElementById('hamburger').classList.remove('hide')
    document.getElementById('close').classList.add('hide')
    document.querySelector('.icon').classList.remove('spin')
    document.body.classList.remove('animate')
    window.location.href="#services";
  }, 4500)
}

const goToWebDev = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    underNav.classList.remove('hide')
    document.getElementById('hamburger').classList.remove('hide')
    document.getElementById('close').classList.add('hide')
    document.querySelector('.icon').classList.remove('spin')
    document.body.classList.remove('animate')
    window.location.href="/webdev";
  }, 4500)
}

const goToMarketing = () => {
  PageSwitchAnimation()
  setTimeout(() => {
    underNav.classList.remove('hide')
    document.getElementById('hamburger').classList.remove('hide')
    document.getElementById('close').classList.add('hide')
    document.querySelector('.icon').classList.remove('spin')
    document.body.classList.remove('animate')
    window.location.href="/marketing";
  }, 4500)
}

loadnav()
loadMenu()
