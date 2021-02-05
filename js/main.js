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




////////////67 DOM Traversing: Recorriendo el DOM

//const $cards = document.querySelector(".cards");

//Mostrando los nodos hijos
    //$cards.childNodes
//Haciendo referencia a los hijos de cards
    //$cards.children
//Haciendo referencia a un elemento especifico
    //$cards.children[2]
//Obteniendo el primero y ultimo elemento hijo
    //$cards.firstElementChild
    //$cards.lastElementChild
//Obteniendo el hermano anterior y posterior
    //$cards.previousElementSibling
    //$cards.nextElementSibling
//Metodo nuevo closest(), va a buscar el padre mas cercano del tipo de selector
    //$cards.children[3].closest("section")



////////////68 DOM Traversing: Creando Elementos y Fragmentos

//Creando una tarjeta de manera dinamica
//Definiendo las variables necesarias
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

//Agregando cada etiqueta al DOM
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Tambien se puede crear contenido dinamico
//con innerHTML

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);


//Insertando una lista
const seasons = ["Primavera","Otoño","Verano","Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Seasons</h3>");
document.body.appendChild($ul);

seasons.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});


//Segunda forma de insertar una lista
const continents = ["Africa","America","Asia","Europa","Oceania"],
$ul2 = document.createElement("ul");

document.write("<h3>Continents</h3>");
document.body.appendChild($ul2);

//Antes habia que inicializar el innerHTML con una cadena vacia
//$ul2.innerHTML = "";

continents.forEach(el => (
    $ul2.innerHTML += `<li>${el}</li>`
));


//Para renderizar muchos elementos es necesario 
//utilizar fragment

const months = [
    "Enero","Febrero","Marzo",
    "Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre",
    "Octubre","Noviembre","Diciembre",
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

months.forEach(el => {
    const $li =  document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Monts</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);




//////69 - DOM: Templates HTML

//Es una nueva funcionalidad de ecma script 5
//Se utilizan mucho en viejs

//const $card = document.querySelector(".cards"),
const $template = document.getElementById("template-card").content,
//$fragment = document.createDocumentFragment(),

//Este arreglo contendra en objetos el contenido de cada card
cardContent = [
    {
        title:"Tecnologia",
        img:"https://placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img:"https://placeimg.com/200/200/animals",
    },
    {
        title:"Arquitectura",
        img:"https://placeimg.com/200/200/arch",
    },
    {
        title:"Gente",
        img:"https://placeimg.com/200/200/people",
    },
    {
        title:"Naturaleza",
        img:"https://placeimg.com/200/200/nature",
    },
];

//Por cada elemento que tra cardContent se hará lo siguiente:

cardContent.forEach(el => {
    //Comenzamos a recorrer y agregar cada uno de los elementos del template
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //El template es único, en este caso se clona la estructura
    //El true indica que se copia la estructura completa
    let $clone = document.importNode($template, true);

    $fragment.appendChild($clone);
});
//Realizando la insercion al DOM
$card.appendChild($fragment);


///Muy importante!!! Las etiquetas templates no se renderizan en el DOM








