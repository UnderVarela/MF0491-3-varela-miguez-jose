function calcularArea() {
  let base = parseInt(document.getElementById("base").value)
  let altura = parseInt(document.getElementById("altura").value)
  let area = (base * altura) / 2

  
  document.getElementById("resultado").innerHTML = "El área del triángulo es " + area
}

document.getElementById('boton').addEventListener('click', () => {
  calcularArea()
})