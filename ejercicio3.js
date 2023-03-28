
 
 function crearParrafo() {
 
   let nombre = document.getElementById("nombre").value
   let apellidos = document.getElementById("apellidos").value
   let parrafo = document.createElement("p")
   parrafo.className = "miParrafo"
   parrafo.innerHTML = nombre + " " + apellidos
   document.body.appendChild(parrafo)
 }
 
 document.getElementById('enviar').addEventListener('click', () => {
  crearParrafo()
 })