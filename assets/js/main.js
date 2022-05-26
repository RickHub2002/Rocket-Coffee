const headerMenu = document.querySelector('header');
const mainMenu = document.querySelector('main');

burguerIcon.addEventListener('click', () => {
    if(headerMenu.classList.contains('menu-mobile-closed')) {
        headerMenu.classList.remove('menu-mobile-closed');
        headerMenu.classList.add('menu-mobile-opened');
        mainMenu.style.display = 'none';

        burguerIcon.src = './assets/images/menu-buguer-close.svg'
    } else {
        headerMenu.classList.remove('menu-mobile-opened');
        headerMenu.classList.add('menu-mobile-closed');
        mainMenu.style.display = 'block';
        
        burguerIcon.src = './assets/images/menu-buguer-open.svg'
    }
});