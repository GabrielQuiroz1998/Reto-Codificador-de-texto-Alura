    function desencriptador(texto){

    var textonuevo = "";

    for (var y = 0; y < texto.length; y++){

        if(texto[y] == "o"){
            if(texto[y + 1] == "b"){
                if(texto[y + 2] == "e"){
                    if(texto[y + 3] == "r"){
                        textonuevo += texto[y];
                        y = y + 3;
                    }
                }
            }
        }
        else if(texto[y] == "a"){
            if(texto[y + 1] == "i" ){
                textonuevo += texto[y];
                y = y + 1;
            }
        }
        else if(texto[y] == "e"){
            if(texto[y + 1] == "n"){
                if(texto[y + 2] == "t"){
                    if(texto[y + 3] == "e"){
                        if(texto[y + 4] == "r"){
                            textonuevo += texto[y];
                            y = y + 4;
                        }                      
                    }
                }
            }
        }
        else if(texto[y] == "i"){
            if(texto[y + 1] == "m"){
                if(texto[y + 2] == "e"){
                    if(texto[y + 3] == "s"){
                        textonuevo += texto[y];
                        y = y + 3;
                    }
                }
            }
        }
        else if(texto[y] == "u"){
            if(texto[y + 1] == "f"){
                if(texto[y + 2] == "a"){
                    if(texto[y + 3] == "t"){
                        textonuevo += texto[y];
                        y = y + 3;
                    }
                }
            }
        }
        else{
            textonuevo += texto[y];
        }
        
    }

    return textonuevo;
}
