const menuTop = document.querySelector('#ct-top-menu')
const menuTopToggle = document.querySelector('#ct-toggle-top-menu-icon')

document.addEventListener('click', function(e){
    if(menuTopToggle.contains(e.target)){
        menuTop.classList.toggle('hidden') 
        menuTop.classList.toggle('ct-topmenu-expanded') 
    }else{
        if(menuTop.classList.contains('ct-topmenu-expanded')){
            menuTop.classList.remove('ct-topmenu-expanded')
            menuTop.classList.add('hidden')
        }
    }
})

