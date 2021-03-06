//Pantalla de inicio que da la bienvenida
function start(){
  document.getElementById('firstWindow').style.display="block";
  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById("thirdWindowdecipher").style.display="none";
  document.getElementById('playAgainEncode').style.display="none";
  document.getElementById('playAgainDecode').style.display="none";
  document.getElementById("thanksEncode").style.display="none";
  document.getElementById("thanksDecode").style.display="none";
  document.getElementById("shareItEncode").style.display="none";
  document.getElementById("shareItDecode").style.display="none";
}

//Boton que permite pasar a la pantalla para escribir texto
const button_start = document.getElementById("begin");
button_start.addEventListener('click',()=>{
  alert("¡ATENCION!, DEBES ESCRIBIR TU TEXTO SIN SIGNOS DE PUNTUACIÓN")
  document.getElementById('firstWindow').style.display="none";
  document.getElementById('secondWindow').style.display="block";

  
  
});





//funcion para cuando el usuario aprieta jugar de nuevo desde encode
const button_again1 = document.getElementById("begin1");
button_again1.addEventListener('click', ()=>{
  alert("¡ATENCION!, DEBES ESCRIBIR TU TEXTO SIN SIGNOS DE PUNTUACIÓN")
  document.getElementById('playAgainEncode').style.display="block";
});

//funcion para cuando el usuario aprieta jugar de nuevo desde decode
const button_again2 = document.getElementById("begin2");
button_again2.addEventListener('click', ()=>{
  alert("¡ATENCION!, DEBES ESCRIBIR TU TEXTO SIN SIGNOS DE PUNTUACIÓN")
  document.getElementById('playAgainDecode').style.display="block";
});



const button_cipherOne = document.getElementById('cipher1');
button_cipherOne.addEventListener('click', () => {

   //Esto permite que el offset se guarde en una variable 
   const instertoffset= document.getElementById('quantity').value;
   //aqui se guarda la informacion escrita en el offset

  //Esto permite que el mensaje escrito se guarde en una variable
  const message = document.getElementById('givenText').value;
   
  //aqui se guarda la informacion escrita desde el textarea 

   // me conecta con cipher.js

 document.getElementById('thisText').innerHTML= window.cipher.encode(instertoffset, message);//imprime resultado en html. 

  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="block";

});


const button_decipherOne = document.getElementById('decipher1');
button_decipherOne.addEventListener('click', () =>{
//Esto permite que el offset se guarde en una variable 
const offsetDecode= document.getElementById('quantity').value;
//aqui se guarda la informacion escrita en el offset 


//Esto permite que el mensaje escrito se guarde en una variable
  const messaged = document.getElementById('givenText').value; 
  //aqui se guarda la informacion escrita desde el textarea
  
  //me conecta con cipher.js

document.getElementById('thisText2').innerHTML= window.cipher.decode(offsetDecode, messaged);//me imprime el texto en html 
  
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById('thirdWindowdecipher').style.display="block";


});




const button_thanku1 = document.getElementById('thanks1');
button_thanku1.addEventListener('click',()=>{
  document.getElementById("thanksEncode").style.display="block";

});

const button_thanku2 = document.getElementById('thanks2');
button_thanku2.addEventListener('click',()=>{
  document.getElementById("thanksDecode").style.display="block";

});




//funciones que permiten pasar a la pantalla de compartir desde el boton codificar y decodificar
const button_shareit1 = document.getElementById('share1');
button_shareit1.addEventListener('click', () =>{
  document.getElementById("shareItEncode").style.display="block";
});

const button_shareit2 = document.getElementById('share2');
button_shareit2.addEventListener('click', () =>{
  document.getElementById("shareItDecode").style.display="block";
});


window.onload = start;