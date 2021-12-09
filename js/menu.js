
const openMenu = (menu, classActive) => {
    menu.classList.add(classActive);
}

const closeMenu = (menu, classActive) => {
    menu.classList.remove(classActive);
}

const slideMenu = ({openBtn, menu, classActive, closeTriggers}) => {
    const openBtnE = document.querySelector(openBtn);
    const menuE = document.querySelector(menu);
    const closeTriggersE = document.querySelectorAll(closeTriggers);
   
    openBtnE.addEventListener('click', () => {
       openMenu(menuE, classActive); 
    });
    
    closeTriggersE.forEach(element => {
        element.addEventListener('click', () => {
            closeMenu(menuE, classActive);
        })
    });
}

export default slideMenu;