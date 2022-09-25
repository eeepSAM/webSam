const menuHamburguer = document.getElementById('btn-hamburguer')

function ativaMenu(){
  const navBar = document.getElementById('nav-bar')
  navBar.classList.toggle('active')
 
}

menuHamburguer.addEventListener('click', ativaMenu);






  
