const letters = /^[a-zA-Z\s]+$/;
let checkLower

$('.botaoCri').click(function () {
  let msgOld = $('.cripto').val();
  let chave = $('.chave1').val();
  if (letters.test(msgOld, chave)) {
    criptografar(msgOld, chave);
    $('.cripto').val('');
    $('.chave1').val('');
  } else {
    alert("Escreva uma Mensagem Para Criptografar!");
    return;
  }

})

/*$('.botaoDescri').click(function () {
  let msg2 = $('.descripto').val();
  let chave2 = $('.chave2').val();
  if (letters.test(msg2, chave2)) {
    descriptografar(msg2, chave2);
    $('.descripto').val('');
    $('.chave2').val('');
  } else {
    alert("Escreva uma Mensagem Para Descriptografar!");
    return;
  }

})
*/

function criptografar(msgOld, chave) {

  let msgNew = ' ';

  for (let i = 0; i < msgOld.length; i++) {

    if (msgOld[i].charCodeAt() == 32) {
      msgNew += ' ';
    } else {

    }

    let letterToNumber = msgOld[i].toLowerCase().charCodeAt() - 96;
    letterToNumber += chave;
    if (letterToNumber > 26) {
      letterToNumber %= 26;

    }
    if (checkLower) {
      msgNew += String.fromCharCode(96 + letterToNumber);
    } else {
      msgNew += String.fromCharCode(96 + letterToNumber).toUpperCase();
    }
  }
  return $(".result").append(msgNew);

}

/*

function descriptografar(msgOld2, chave2) {

  let msgNew2 = ' ';

  for (let j = 0; j < msgOld2.length; j++) {

    if (msgOld2[j].charCodeAt() == 32) {
      msgNew2 += ' ';
    } else {
      if (msgOld2[j] == msgOld2[j].toLowerCase()) {
        var checkLower2 = true;
      } else {
        var checkLower2 = false;
      }

      let letterToNumber2 = msgOld2[j].toLowerCase().charCodeAt() - 96;
      letterToNumber2 += chave2;
      if (letterToNumber2 > 26) {
        letterToNumber2 %= 26;

      }
      if (checkLower2) {
        msgNew2 += String.fromCharCode(96 + letterToNumber2);
      } else {
        msgNew2 += String.fromCharCode(96 + letterToNumber2).toUpperCase();
      }
    }

  }
  return $(".result").append(msgNew2);

};
*/