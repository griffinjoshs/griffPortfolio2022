const skills = ['Web Developer', 'Digital Marketer']

const header = document.getElementById('header')

for(let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}

const showHero = () => {
    header.innerHTML += `
        <h4>
          Hi, I'm Griffin! <br>
          <span>
            I am a
          </span>
        </h4>
        <h2>Web Developer</h2>
          <div class="hero-button-sec">
          <h5 onclick='goToHire()'>for hire</h5>
            <a href="/">
            <button id="button1">About Me</button></a>
        </div>
        `
}

showHero()