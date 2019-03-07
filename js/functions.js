function letraAnterior(s){
    let c = s.charCodeAt(0);
    switch(c){
        case 32: return '~';
        default: return String.fromCharCode(--c);
    }
}

function letraPosterior(s){
    let c = s.charCodeAt(0);
    switch(c){
        case 126: return ' ';
        default: return String.fromCharCode(++c);
    }
}

function criptografar(){
    let mensagem = $('.cripto').val()
    let key = $('.chave1').val()
    let mensagemCriptografada = ""

    for(let i =0; i < mensagem.length; i++){
        let novoCaracter = String.fromCharCode(mensagem.charCodeAt(i))
        for(let j =0; j < key; j++){
            novoCaracter = letraPosterior(novoCaracter)
        }
        mensagemCriptografada += novoCaracter
    }
    $(".result").append(mensagemCriptografada);
}
