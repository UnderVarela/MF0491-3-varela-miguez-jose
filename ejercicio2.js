
function esEntero(numero) {
  let exReg = /^\d+$/
  return exReg.test(numero)
}


function esImpar(numero) {
  return numero % 2 !== 0
}


function resultado(numero) {
  
  if (esEntero(numero)) {
    let resultado = esImpar(numero) ? "impar" : "par"
    
    document.getElementById("resultado").textContent = "El número " + numero + " es " + resultado
    
  } else {
    
    alert("El número no es válido. Introduce un número entero.")
  }
}


document.getElementById("boton").addEventListener("click", function () {
  let numero = Number(document.getElementById("numero").value)
  resultado(numero)
})

