window.cipher = {
  encode: (offset, text) => {
    /* Acá va tu código */
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
                alert("PORFAVOR INGRESA TU TEXTO SIN SIGNOS DE PUNTUACION")
                return result;
              }
            }
            return result;
          }
        };



 window.decipher={
   decode: (offsetd,textd)=>{
     let resultDecipher="";
     for(let d = 0; d < textd.length; d++){
       let textToAsciid= 0;
       let textToAscii2= 0;
       let space2= "";
       textToAsciid= textd.charCodeAt(d);
       if (textToAsciid ===32){
         space2 += 32;
         resultDecipher += String.fromCharCode(textToAsciid);
       }
       else if ( textToAsciid >= 65 && textToAsciid <= 90){
         textToAscii2=(textToAsciid - 90 - offsetd)% 26 - 90;
         resultDecipher += String.fromCharCode(textToAscii2);
       }
       else{ 
         alert("PORFAVOR DEBES ESCRIBIR TU TEXTO SIN SIGNOS DE PUNTUACIÓN")
         return restultDecipher;
       }
     }
     return resultDecipher;
   }
 }       

































  /*function decode (offset,text){
  let result ="";
  for (i= 0; i< text.length; i++){
    let textToAscii= 0;
    let textToAscii1=0;
    let space = "";
    texttoascii = text.charCodeAt(i);
    if(textToAscii=== 32){
      space += 32;
      result += String.fromCharCode(textToAscii);
    }
    else if (textToAscii >= 65 && textToAscii <= 90){
      textToAscii1=(textToAscii - 90 - offset) %26 - 90;
      result += String.fromCharCode(textToAscii1);
    }else{
      alert("PORFAVOR INGRESA TU TEXTO SIN SIGNOS DE PUNTUACION");
      return result;
    }
    return result;
  };



  /*function decode (offset,text){
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
}*/
