window.cipher = {
  encode: (insertOffset, message1) => {
    let result ="";
      for ( let i = 0; i< message1.length; i++){
          let textToAscii= 0;
          let textToAscii1= 0;
          let space = "";
          textToAscii = message1.charCodeAt(i);
          if(textToAscii===32){
            space += 32;
            result+= String.fromCharCode(textToAscii);
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

   }
},



 window.decipher ={
   decode: (offsetDecode,message2)=>{
     let result1="";
     for(let i = 0; i < message2.length; i++){
       let textToAsciid= 0;
       let textToAscii2= 0;
       let space2 = "";
       textToAsciid= message2.charCodeAt(i);
       if (textToAsciid ===32){
         space2 += 32;
         result1+= String.fromCharCode(textToAsciid);
       }
       else if ( textToAsciid >= 65 && textToAsciid <= 90){
         textToAscii2=(textToAsciid - 65 - parseInt(offsetDecode))% 26 + 65;
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
