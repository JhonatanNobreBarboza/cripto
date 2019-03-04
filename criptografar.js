module.exports = function criptografar(inputString, chave){
  const msg = ""
  //const oldAscci =  
  //const newAscci 

  for(let i = 0; i < inputString.length; i++){
   let oldAscci = inputString[i].charCodeAt()
   let newAscci = oldAscci + chave

  msg = msg.concat(String.fromCharCode(newAscci))
  }
  return msg;
}

