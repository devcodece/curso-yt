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
//console.log(document.getElementsByTagName("li"))
//console.log(document.getElementsByClassName("card"))
//console.log(document.getElementsByName("nombre"))

//Estos tres han sido reemplazados por: querySelector
//Asume que va recibir un selector valido de css
//Debe especificarse que tipo de selector es
//Se trae el primer selector
//console.log(document.querySelector("#menu"))
//console.log(document.querySelector(".card"))

//Quiero seleccionar la tercer tarjeta
//console.log(document.querySelectorAll(".card")[2])

//Seleccionar la primera li del menu
//console.log(document.querySelector("#menu li"))

//Para traerse todos los selectores
//console.log(document.querySelectorAll("a").length)
//document.querySelectorAll("a").forEach((el)=>console.log(el))

//Query selector y all devuelven NodeList


//Este método es más rápido que querySelector
//Utilizar para capturar elementos por su id
//console.log(document.getElementById("menu"))


////////////64 DOM, Estilos y Variables CSS
//Variables declaradas con el signo de "$" al principio
//son variables que representan una referencia al DOM
const $linkDOM = document.getElementById("link-dom");

//Estableciendo propiedades CSS con JS
$linkDOM.style.backgroundColor = "gold";
//$linkDOM.style.setProperty("background-color","gold")
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

const $html = document.documentElement, $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","whitesmoke");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);




////////////65 DOM, Clases CSS

//Accediento a la clase del objeto
const $card = document.querySelector(".card");
$card.classList.add("rotate-45");
$card.classList.remove("rotate-45");
//Si no tiene la clase se la pone o viceversa
$card.classList.toggle("rotate-45");
//Reemplaza las clases de uno en uno
$card.classList.replace("rotate-45","rotate-135");
//Se puede aplicar mas de una clase a la vez
$card.classList.add("opacity-80","sepia")
$card.classList.toggle("rotate-135");



////////////66 DOM, Texto y HTML

const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>El Modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>)
es un API para documentos HTML y XML</p>
<p>Este provee una representacion estructural del documento, permitiendo modificar
su contenido y presentacion visual mediante codigo JS</p>
<p><mark>El DOM no es parte de la especificacion de JavaScript, es una API
para los navegadores</mark></p>
`;

//Inserta tal y como esta el texto
$whatIsDOM.textContent = text;

//Inserta texto HTML
$whatIsDOM.innerHTML = text;

//Reemplazar todo la etiqueta, por la nueva
//Visualmente no hay diferencia
$whatIsDOM.outerHTML = text;
