function acerto(){
    let certa = document.querySelector('.certa');
    let justificativaCerta = document.querySelector('.correta')
    let justificativaErrada = document.querySelector('.errada')

    justificativaErrada.style.display = "none";
    justificativaCerta.style.display = "flex";
    certa.style = "background-color: #CDFE9C";


}

function errou(){
    let certa = document.querySelector('.certa');
    let justificativaErrada = document.querySelector('.errada')
    let justificativaCerta = document.querySelector('.correta')

    justificativaCerta.style.display = "none";
    justificativaErrada.style.display = "flex";
    certa.style = "background-color: #CDFE9C";
}