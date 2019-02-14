window.cipher = {
  encode: (insertOffset, message) => {
    let result ="";
      for ( let i = 0; i< message.length; i++){
          let textToAscii= 0;
          let textToAscii1= 0;
          
          textToAscii = message.charCodeAt(i);
          if(textToAscii===32){
            
            result+= String.fromCharCode(textToAscii);
          }
           else if(textToAscii >= 33 && textToAscii <=64 ){
             textToAscii1= (textToAscii - 33 + parseInt(insertOffset)) %32 + 33;
             result += String.fromCharCode(textToAscii1);
           }
            else if(textToAscii >=97 && textToAscii <=122){
              textToAscii1 = (textToAscii - 97 + parseInt(insertOffset))%26 + 97;
              result += String.fromCharCode(textToAscii1);
           }
            else if (textToAscii >=191 && textToAscii <=254){
              textToAscii1 = (textToAscii - 191 + parseInt(insertOffset))%64 +191;
              result += String.fromCharCode(textToAscii1);
            }
            else if(textToAscii >= 65 && textToAscii <=90 ){
                  textToAscii1= (textToAscii - 65 + parseInt(insertOffset)) %26 + 65;
                  result += String.fromCharCode(textToAscii1);
             }else{
                alert("PORFAVOR INGRESA TU TEXTO SIN SIGNOS DE PUNTUACION")
                return result;
              }
            }
            return result;

   },


    decode: (offsetDecode,messaged)=>{
    let result1="";
    for(let i = 0; i < messaged.length; i++){
      let textToAsciid= 0;
      let textToAscii2= 0;
      
      textToAsciid= messaged.charCodeAt(i);
      if (textToAsciid ===32){
        
        result1+= String.fromCharCode(textToAsciid);
        }
        else if(textToAsciid >= 33 && textToAsciid <=64 ){
          textToAscii2= (textToAsciid - 64 - parseInt(offsetDecode)) %32 + 64;
          result1 += String.fromCharCode(textToAscii2);
        }
         else if(textToAsciid >=97 && textToAsciid <=122){
           textToAscii2 = (textToAsciid - 122 - parseInt(offsetDecode))%26 + 122;
           result1 += String.fromCharCode(textToAscii2);
        }
         else if (textToAsciid >=191 && textToAsciid <=254){
           textToAscii2 = (textToAsciid - 254 - parseInt(offsetDecode))%64 + 254;
           result1 += String.fromCharCode(textToAscii2);
        }
         else if ( textToAsciid >= 65 && textToAsciid <= 90){
        textToAscii2=(textToAsciid - 90 - parseInt(offsetDecode))% 26 + 90;
        result1 += String.fromCharCode(textToAscii2);
      }
      else{ 
        alert("PORFAVOR DEBES ESCRIBIR TU TEXTO SIN SIGNOS DE PUNTUACIÓN")
        return result1;
      }
     }
    return result1;
  }
};



 
 


































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
