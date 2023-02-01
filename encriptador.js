var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var imgMunheco = document.querySelector(".cont-munheco");
var contTexto = document.querySelector(".contenedor-texto");
//var contParrafo = document.querySelector(".contenedor-parrafo");
var txtResultado =document.querySelector(".resultado");
var campoTexto = document.getElementById('textBox');


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
document.getElementById('copiar').addEventListener('click', copiarAlPortapapeles);
campoTexto.addEventListener('focus', function(){
    campoTexto.value = "";
})

function encriptar(){
    ocultarAdelante();
    txtResultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarAdelante();
    txtResultado.textContent = desencriptarTexto(recuperarTexto());
}

function copiarAlPortapapeles(ev){
    var codigoACopiar = document.getElementById('textoCopiar');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}
    
function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    imgMunheco.classList.add("ocultar");
    contTexto.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "over";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
