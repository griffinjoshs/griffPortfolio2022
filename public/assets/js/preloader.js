const loader = document.getElementById('pre-load')

const vanish = () => {
    loader.classList.add('hide')
}

window.addEventListener('load', vanish);
