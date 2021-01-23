
document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.open').style.display = 'none'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.mobile-links').style.display = 'flex'
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.close').style.display = 'none'
    document.querySelector('.open').style.display = 'block'
    document.querySelector('.mobile-links').style.display = 'none'
})
