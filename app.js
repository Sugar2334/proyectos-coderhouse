addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav__links = document.querySelector('.nav__links')
            nav__links.classList.toggle('show')
        })
    }
})