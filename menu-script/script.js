const btnMobile = document.getElementById('btn-mobile');

const toggleMenu = () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

// about-me section

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})