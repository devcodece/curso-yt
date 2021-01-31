//console.log("*********Elementos del Documento*********")
//console.log(document)
//console.log(document.head)
//console.log(document.body)
//console.log(document.documentElement)
//console.log(document.doctype)
//console.log(document.charset)
//console.log(document.title)
//console.log(document.links)
//document.write("<h2>Insert a paragraph from the DOM </h2>")


////////////62 Nodos, Elementos y Selectores

//Metodos obsoletos
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))

//Estos tres han sido reemplazados por: querySelector
//Asume que va recibir un selector valido de css
//Debe especificarse que tipo de selector es
//Se trae el primer selector
console.log(document.querySelector("#menu"))
console.log(document.querySelector(".card"))

//Quiero seleccionar la tercer tarjeta
console.log(document.querySelectorAll(".card")[2])

//Seleccionar la primera li del menu
console.log(document.querySelector("#menu li"))

//Para traerse todos los selectores
console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach((el)=>console.log(el))

//Query selector y all devuelven NodeList


//Este método es más rápido que querySelector
//Utilizar para capturar elementos por su id
console.log(document.getElementById("menu"))

