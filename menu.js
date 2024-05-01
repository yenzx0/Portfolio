let menu_abrir = document.getElementById ('abrir')
let menu = document.getElementById ('menu_celular')
let overlay = document.getElementById('overlay_menu')

menu_abrir.addEventListener('click', ()=>{
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})

