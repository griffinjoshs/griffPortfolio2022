const ServicesContent = [
  {
    id: 0,
    title: "Web Development",
    text:
      "I am A Rutgers certified Full-Stack Web Developer. However im much more sharp on the front-end side, but I know enough of the back end to build almost any type of website you may need!",
      link: "goToWebDev()",
      icon: "<ion-icon name='code-slash-outline' class='card-icon'></ion-icon>",
    colors: {
      text: '#21aad8',
      logoBackground: 'linear-gradient(40deg, #21aad8 0%, #21aad8 45%, blue 100%);',
      textBackground: 'black'
    }
  },
  {
    id: 1,
    title: "Digital Marketing",
    text:
      "I am an NJIT certified Digital Marketer with over 3 years of prior experience in the field. My main is content marketing on social media, however I can build any type of funnel you may need!",
    link: "goToWebDev()",
    icon: "<ion-icon name='share-social-outline' class='card-icon'></ion-icon>",
    colors: {
      text: '#fc00ff',
      logoBackground: 'linear-gradient(40deg, #fc00ff 0%, #fc00ff 45%, #21aad8 100%);',
      textBackground: 'black'
    }
  },
];

const serviceCards = document.getElementById('section');
const card = document.querySelector('.card')

const showServiceBoxes = () => {
  ServicesContent.map(
    (serviceInfo, i) =>
      (serviceCards.innerHTML += `
      <div class="card" style="background: ${serviceInfo.colors.logoBackground}" onclick="${serviceInfo.link}" onmouseover='showButton()' onmouseout='hideButton()'>
        <div class="face face1" style='background: ${serviceInfo.colors.textBackground}'>
          <div class="content" style="color: ${serviceInfo.colors.text}">
            <span class="stars"></span>
            <p>${serviceInfo.text}</p>
          </div>
        </div>
        <div class="face face2" style="background: ${serviceInfo.colors.logoBackground}">
          <h2>${serviceInfo.icon}</h2>
          <h3>${serviceInfo.title}</h3>
          <a href='${serviceInfo.link}'><button class='hide'><ion-icon name="arrow-forward-circle-outline" class='arrow-icon'></ion-icon></button></a>
        </div>
`)
  );
};

showServiceBoxes();

const showButton = () => {
  document.querySelector('.card button').classList.remove('hide')
}

const hideButton = () => {
  document.querySelector('.card button').classList.add('hide')
}