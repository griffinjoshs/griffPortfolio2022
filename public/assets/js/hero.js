const header = document.getElementById('header')

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
          <h5>for hire</h5>
            <a href="index.html"><button id="button1">About Me</button></a>
        </div>
        `
}

showHero()