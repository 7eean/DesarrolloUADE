const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//Loader
setTimeout(function(){
   
        this.document.getElementById("loader").classList.toggle("loader2")
    
}, 3000)
/*
window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2")
},)*/


// Form with Submit responsive 

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario vacio
  
    var formulario = document.getElementById("miFormulario");
  
    if (formulario.checkValidity()) {
      // Chequea que los campos esten completados
      var nombre = document.getElementById("formGroupExampleInput").value;
      var email = document.getElementById("exampleInputEmail1").value;
      var mensaje = document.getElementById("exampleFormControlTextarea1").value;
  
      var templateParams = {
        from_name: nombre,
        from_email: email,
        message: mensaje
      };
  
      emailjs.send('desarrolloweb', 'Desarrollo_web', templateParams, '21Rut5Jru_CH4uJDF')
        .then(function(response) {
          alert('¡El correo se ha enviado correctamente!');
          
          // Vacia los campos del formulario una vez que se envio
          formulario.reset();
        })
    } 
  });
  
  