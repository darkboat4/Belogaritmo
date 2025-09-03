

// function mudarPag(e){
//     window.location.href(e)
// }

// const  btnComecar = document.getElementById("start")

// btnComecar.addEventListener('click', mudarPag("materias.html"))

document.addEventListener('click', (e) => {
    let el = e.target;

    if(el.classList.contains('start')) {
        window.location.href = "materias.html"
    }
})