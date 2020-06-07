// adding event listener on button for prevent change URL
document.getElementById("paletas").addEventListener("click", function(event){
    event.preventDefault()
})

const body = document.getElementsByTagName('body');


function paleta(cor) {
    body[0].removeAttribute('class');
    if (cor === 'verde') {
        body[0].classList.add('paleta_verde');
        localStorage.setItem('paleta', 'verde');
    }
    if (cor === 'azul') {
        body[0].classList.add('paleta_azul');
        localStorage.setItem('paleta', 'azul');
    }
}

function getPaleta () {
    let paleta_cor = localStorage.getItem('paleta');
    if (paleta_cor === 'verde') {
        paleta('verde');
    }
    if (paleta_cor === 'azul') {
        paleta('azul');
    }
}
window.onload = getPaleta()