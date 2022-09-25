const menuHamburguer = document.getElementById('btn-hamburguer')
const containerNav = document.getElementById('container-nav')

function ativaMenu(){
  const navBar = document.getElementById('nav-bar')
  navBar.classList.toggle('active')
 
}

window.addEventListener('scroll', scrollNavBar)

function scrollNavBar(){
  if(window.scrollY > 10 && containerNav.classList.contains('header-container-nav')){
    containerNav.classList.add('scroll')
  } else{
    containerNav.classList.remove('scroll')
  }
} 

menuHamburguer.addEventListener('click', ativaMenu);





  
