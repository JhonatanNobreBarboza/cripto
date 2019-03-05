function criptografar(){
  
let inputScript = $(".cripto").val();
let chave1 = $(".chave1").val();
let msg= "";

for (let i = 0, i = inputScript.length; i < length; i++){
  //msg = String.fromCharCode(inputScript.charCodeAt(i) + chave1);
  if(inputScript[i].charCodeAt() == 32){
    
  }
}
$(".result").append(msg);


console.log(msg);


}


