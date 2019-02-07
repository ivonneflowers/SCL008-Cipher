function encode (offset,text){
      let result ="";
      for ( let i = 0; i< text.length; i++){
          let textToAscii= 0;
          let texToAscii1= 0;
          let space = "";
          textToAscii = text.charCodeAt(i);
          if(textToAscii===32){
            space += 32;
            result+= String.fromCharCode(textToAscii);
          }
            else if(textToAscii >= 65 && textToAscii <=90 ){
                  textToAscii1= (textToAscii - 65 + offset) %26 + 65;
                  result += String.fromCharCode(textToAscii1);
             }else{
                alert("PORFAVOR INGRESA TU TEXTO EN MAYUSCULAS, SIN SIGNOS DE PUNTUACIÓN")
                return result;
              }
          }
return result;
}


function decode (offset,text){
      let result ="";
      for ( let i = 0; i< text.length; i++){
          let textToAscii= 0;
          let texToAscii1= 0;
          let space1 = "";
          textToAscii = text.charCodeAt(i);
          if(textToAscii===32){
            space1 += 32;
            result += String.fromCharCode(textToAscii);
          }
               else if(textToAscii >= 65 && textToAscii <=90 ){
                  textToAscii1= (textToAscii - 90 - offset) %26 + 90;
                  result += String.fromCharCode(textToAscii1);
             }else{
                alert("PORFAVOR INGRESA TU TEXTO EN MAYUSCULAS, SIN SIGNOS DE PUNTUACIÓN")
                return result;
              }
          }
return result;
}











// //  function caesarCipher (offset, text){
//    let result = "";
//    for (let i = 0; i < text.length; i++){
//        let wathever = (text.charCodeAt(0) - 65 + offset) % 26 + 65);
//        wathever.stringCharCodeAd(text);
//       result+= wathever;
//    }
//    return result;
//  }
