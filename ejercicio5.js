let numeros = []
let parrafo = document.getElementById('parrafo')

function cargaNumeros () {
  const numero = document.getElementById('numero').value 
  numeros.push(numero)
  parrafo.innerHTML = `<strong>Numeros cargados:</strong> ${numeros}`
  document.getElementById('numero').value = ''
}


function esMayor () {
  const mayor = Math.max(...numeros)
  document.getElementById('resultado').innerHTML = `El numero mayor de ${numeros} es <strong>${mayor}</strong>`
}



document.getElementById('boton').addEventListener('click', () => {
  cargaNumeros()
})

document.getElementById('boton-mayor').addEventListener('click', () => {
  esMayor()
})