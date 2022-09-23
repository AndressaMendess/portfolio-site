const btnMobile = document.getElementById('btn-mobile');

const toggleMenu = () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)