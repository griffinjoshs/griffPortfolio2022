// slider
const slider = document.getElementById("slider");

const sliderArray = [
  {
    id: 0,
    title: "Front-End Web Developer",
    descriptionBefore: "I am a",
    descriptionAfter: "that builds premium Websites and Apps",
    color: "#21aad8",
  },
  {
    id: 1,
    title: "Digital Marketer",
    descriptionBefore: "I am a",
    descriptionAfter:
      "that can help you build a name and find new customers across social media and beyond!",
    color: "#ff3794",
  },
];

const showSlider = () => {
  for (let i = 0; i < sliderArray.length; i++) {
    slider.innerHTML += `<div class='slide-${i}'><h2>
        ${sliderArray[i].descriptionBefore} <span><a href='index.html'>${sliderArray[i].title}</a></span> <span>${sliderArray[i].descriptionAfter}</span>
        </h2>
        <div class="hero-button-sec">
        <a href="index.html"><button id="button1">About Me</button></a>
        <div id="line"></div>
        <a href="index.html"><button id="button2">My Work</button></a>
        </div>`;
  }
};

showSlider();
