var botonEncriptar = document.querySelector("#boton-uno");

botonEncriptar.addEventListener("click", function(){
    var textArea = document.querySelector("#input");
    var texto = textArea.value;

    if (comprobarTexto(texto)){
        alert("No se adminten Mayusculas ni Caracteres Especiales");
    }else{
        var textonuevo = encriptador(texto);
        var textoutput = document.querySelector("#output");
        textoutput.value = textonuevo;
        ocultarDivMensajeError();
        mostrarDivNuevo()
    }

})

var botonDesencriptar = document.querySelector("#boton-dos");

botonDesencriptar.addEventListener("click", function(){
    var textArea = document.querySelector("#input");
    var texto = textArea.value;

    var textonuevo = desencriptador(texto);
    
    var textoutput = document.querySelector("#output");
    textoutput.value = textonuevo;
})

function ocultarDivMensajeError(){
    var divViejo = document.querySelector("#mensaje-error");
    divViejo.classList.add("poner-invisible-div");
}

function mostrarDivNuevo(){
    document.getElementById("mostrar-texto").classList.remove("div-texto-boton-copiar");
    document.getElementById("mostrar-texto").classList.add("div-texto-boton-copia-nuevo");
    document.getElementById("output").classList.remove("mostrar-mensaje");
    document.getElementById("output").classList.add("textarea-nuevo");
    document.getElementById("boton-copiar").classList.add("boton-copiar-nuevo");

}

function comprobarTexto(text) { 
    const caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/ ;
    return /[A-Z]/.test(text) || caracteresEspeciales.test(text);
}


var botonCopiar = document.querySelector("#boton-copiar");

botonCopiar.addEventListener("click", function(){
    var texto = document.querySelector("#output");
    texto.select();
    document.execCommand('copy');
})
