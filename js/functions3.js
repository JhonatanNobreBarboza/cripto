function criptografar(){
let values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

let key = $('.chave1').val()
console.log(key)
    if(key > 1) {
        key--
        key = $('.chave1').val()

    }

    if(key < 25) {
      console.log(key)
        key++
        key = $('.chave1').val()
    }

    let mensagem = $('.cripto').val().toUpperCase()
    console.log(mensagem)
    let result = "";

    for(let i = 0; i<mensagem.length; i++){ //Passa por cada caracter do input

        let posicaoDaLetraNoAlfabeto = mensagem.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
        let letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
        
        result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
          
      }
      console.log(result)
    $(".result").append(result);

}