# Funciones y datos necesarios

## document.querySelector("#divPantalla > table:nth-child(1) > tbody:nth-child(1)").childElementCount - 1
Cuantas filas existen
let Rows
## document.querySelector("#divPantalla > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(N)")
Nos devuelve la fila donde N va desde 2 hasta Rows + 1
let theRow
## theRow.childNodes[1].childNodes[1].textContent
Horario
## theRow.childNodes[3].childNodes[3].textContent
Asignatura
## theRow.childNodes[7].childNodes[1].textContent
Sala
