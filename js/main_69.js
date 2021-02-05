//////69 - DOM: Templates HTML

//Es una nueva funcionalidad de ecma script 5
//Se utilizan mucho en viejs

const $card = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),

//Este arreglo contendra 5 objetos que sera el contenido de cada card
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

//Por cada elemento cardContent se hará lo siguiente:

cardContent.forEach(el => {
    //Comenzamos a recorrer y agregar cada uno de los elementos del template
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //El template es único, en este caso se clona la estructura
    let $clone = document.importNode($template, true);
    //El true indica que se copia la estructura completa
    //del elemento que esta iterando el forEach

    $fragment.appendChild($clone);
});
//Realizando la insercion al DOM
$card.appendChild($fragment);

///Muy importante!!! Las etiquetas templates no se renderizan en el DOM








