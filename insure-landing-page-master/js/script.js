const mobileMenu = document.querySelector('.mobile-menu')

document.getElementById('open').addEventListener('click', function() {
    mobileMenu.classList.add('mobile-nav')
    mobileMenu.style.display = 'block'
    document.getElementById('body').classList.add('overflow')
    document.querySelector('.open-menu').style.display = 'none'
    document.querySelector('.close-menu').style.display = 'block'
})

document.getElementById('close').addEventListener('click', function() {
    mobileMenu.classList.remove('mobile-nav')
    mobileMenu.style.display = 'none'
    document.getElementById('body').classList.remove('overflow')
    document.querySelector('.open-menu').style.display = 'block'
    document.querySelector('.close-menu').style.display = 'none'
})