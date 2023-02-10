const openMenu = window.document.querySelector('#openMenu')
const closeMenu = window.document.querySelector('#closeMenu')
const menu = window.document.getElementById('menu')

window.alert('Todo o layout pode ter o rolamento vertical livre, ou seja, se adapta ao conteudo. Para isso remova todas as propriedade HEIGTH  de todos os elementos container')



openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu.style.right = (menu.offsetWidth * -1) + ' px'
    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'
    }, 10)
})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'
    setTimeout(() => {
        menu.removeAttribute('style')

        openMenu.removeAttribute('style')
    }, 200)
})