document.querySelector('.nav-burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-links-active');
    var burger = document.querySelector('.nav-burger span');
    if(burger.innerHTML=="menu"){
        burger.innerHTML = "close";
    }
    else{
        burger.innerHTML = "menu";
    }
})