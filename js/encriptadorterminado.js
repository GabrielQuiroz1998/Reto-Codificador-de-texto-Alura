function encriptador(texto){

    var textonuevo = "";
    var a = "i";
    var e = "nter";
    var i = "mes";
    var o = "ber";
    var u = "fat";

    for (var y = 0; y < texto.length; y++){        
        
        if(texto[y] != "o" || texto[y] != "a" | texto[y] != "u" | texto[y] != "e" | texto[y] != "i"){
            textonuevo += texto[y];
        }            
        
        if(texto[y] == 'o'){
            textonuevo += o;
        }
        
        if(texto[y] == 'a'){
            textonuevo += a;
        }
        
        if(texto[y] == 'e'){
            textonuevo += e;
        }
        
        if(texto[y] == 'i'){
            textonuevo += i;
        }
        
        if(texto[y] == 'u'){
            textonuevo += u;
        }

    }

    return textonuevo;
}