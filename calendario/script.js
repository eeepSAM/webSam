const menuHamburguer = document.getElementById('btn-hamburguer')


function ativaMenu(){
  const navBar = document.getElementById('nav-bar')
  navBar.classList.toggle('active')
  
}

menuHamburguer.addEventListener('click', ativaMenu);

const accordion = document.getElementsByClassName ('contentBx');

for (i = 0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}