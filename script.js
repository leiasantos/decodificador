const criptografarText = document.querySelector(".text_Criptografar");
const mensagemTexto = document.querySelector(".mensagem_texto");

function btnEncriptar() {
  const textoParaEncriptar = encriptar(criptografarText.value);
   mensagemTexto.value = textoParaEncriptar
}

function encriptar(stringEncriptada){
    let codigoMatriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i= 0; i < codigoMatriz.length; i++){
        if(stringEncriptada.includes(codigoMatriz[i][0])){
            stringEncriptada =  stringEncriptada.replaceAll(codigoMatriz[i][0],codigoMatriz[i][1])
        }
    }

    return stringEncriptada;
}

// desencriptar
function btnDesencriptar() {
    const textoParaDesencriptar = desencriptar(criptografarText.value);
    mensagemTexto.value = textoParaDesencriptar 
}

function desencriptar(stringDesecriptada){
    let codigoMatriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesecriptada = stringDesecriptada.toLowerCase();
      
    for(let i= 0; i < codigoMatriz.length; i++){
        if(stringDesecriptada.includes(codigoMatriz[i][1])){
            stringDesecriptada = stringDesecriptada.replaceAll(codigoMatriz[i][1],codigoMatriz[i][0])
        }
    }
    return stringDesecriptada;
};

function copiar(){
    mensagemTexto.select();
    mensagemTexto.setSelectionRange(0, 99999)
    document.execCommand("copy");
}