//Micro desafio 3

//Capturamos los elementos
let $h1 = document.querySelector("h1");
let $section = document.querySelector("section");
let $article = document.querySelector("article");

//Modificamos el titulo y le agregamos la clase "Titulo"
$h1.innerText = " AGREGAR PELICULAS";
$h1.classList.add("titulo");
//Hacemos las ultimas modificaciones de la consigna
$article.classList.add("fondoTransparente");
$section.classList.add("fondoCRUD");
