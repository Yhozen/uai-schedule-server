import { XMLHttpRequest } from 'xmlhttprequest'
import { DOMParser } from 'xmldom'

const xmlhttp = new XMLHttpRequest()
const parser = new DOMParser()


const getSourceAsDOM = url => {
  xmlhttp.open('GET', url, false)
  xmlhttp.send()
  return parser.parseFromString(xmlhttp.responseText, 'text/html')
}

const getData = (adelanto = 0, finalizado = false) => {
  const URL = `http://agenda.uai.cl/clasesRotativa.aspx?codUbicacion=131o132o133o145o147&numFilas=500&diasAdelanto=${adelanto}&mostrarFinalizados=${finalizado}&codUso=53o55o57o60o61o62o63o66o67o69o70`
  let data = getSourceAsDOM(URL)
  let numberOfRows = data.documentElement.getElementsByTagName('tr').length
  let array = []
  for (var i = 1; i < numberOfRows; i++) {
    let theRow = data.documentElement.getElementsByTagName('tr')[i]
    let h = theRow.childNodes[1].childNodes[1].textContent
    let c = theRow.childNodes[3].childNodes[3].textContent
    let s = theRow.childNodes[7].childNodes[1].textContent
    array.push([h, c, s])
  }
  return array
}
export default getData
