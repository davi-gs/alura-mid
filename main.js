function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        console.log('Elemento não encontrado');
    } else {
        elemento.play();
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let indice = 0; indice < listaDeTeclas.length; indice++){

    const tecla = listaDeTeclas[indice];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function (evento){
        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add ('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}