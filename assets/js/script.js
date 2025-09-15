    const menuBox = document.querySelector('menu');
    

document.addEventListener('click', (e) => {
    let el = e.target;

   
    
    if(el.classList.contains('botao-hamb')){
       document.classList.contains('menu').style = "display:flex"


    }   

})

function rota (caminho) {
   window.location.href = caminho 
}
