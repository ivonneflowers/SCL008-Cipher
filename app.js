
//Pantalla de inicio que da la bienvenida
function start(){
  document.getElementById('firstWindow').style.display="block";
  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById("thirdWindowdecipher").style.display="none";
  document.getElementById("thanksForPlaying").style.display="none";
  document.getElementById("shareIt").style.display="none";
}

//Boton que permite pasar a la pantalla para escribir texto
const button_start = document.getElementById("begin");
button_start.addEventListener('click',()=>{
  alert("¡ATENCION!, DEBES ESCRIBIR TU TEXTO SIN SIGNOS DE PUNTUACIÓN")
  document.getElementById('firstWindow').style.display="none";
  document.getElementById('secondWindow').style.display="block";
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById("thirdWindowdecipher").style.display="none";
  document.getElementById("thanksForPlaying").style.display="none";
  document.getElementById("shareIt").style.display="none";

  let yourTextHere= document.getElementById("givenText").value;
  //let text = yourTextHere.toUpperCase();
});

const button_cipherOne = document.getElementById('cipher1');
button_cipherOne.addEventListener('click', () => {
  //Esto permite que el mensaje escrito se guarde en una variable
  const mensaje = document.getElementById('givenText').value;
  console.log(mensaje);
  document.getElementById('firstWindow').style.display="none";
  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="block";
  document.getElementById('thirdWindowdecipher').style.display="none";
  document.getElementById("thanksForPlaying").style.display="none";
  document.getElementById("shareIt").style.display="none";
  //Aca se hace en enlace con cipher.js
});



const button_decipherOne = document.getElementById('decipher1');
button_decipherOne.addEventListener('click', () =>{
  //Esto permite que el mensaje escrito se guarde en una variable
  const mensaje = document.getElementById('givenText').value;
  console.log(mensaje);
  document.getElementById('firstWindow').style.display="none";
  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById('thirdWindowdecipher').style.display="block";
  document.getElementById("thanksForPlaying").style.display="none";
  document.getElementById("shareIt").style.display="none";
  //Aca se hace el enlace con cipher.js
});

const button_thanku = document.getElementById('thanks');
button_thanku.addEventListener('click',()=>{
  document.getElementById('firstWindow').style.display="none";
  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById('thirdWindowdecipher').style.display="none";
  document.getElementById("thanksForPlaying").style.display="block";
  document.getElementById("shareIt").style.display="none";
});

const button_shareit = document.getElementById('share');
button_shareit.addEventListener('click', () =>{
  document.getElementById('firstWindow').style.display="none";
  document.getElementById('secondWindow').style.display="none";
  document.getElementById("thirdWindowcipher").style.display="none";
  document.getElementById('thirdWindowdecipher').style.display="none";
  document.getElementById("thanksForPlaying").style.display="none";
  document.getElementById("shareIt").style.display="block";
});

window.onload=start;
