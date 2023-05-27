//Micro desafio 2

//capturamos elementos
let $body = document.querySelector("body");
let $h1 = document.querySelector("h1");

//preguntamos si desea el modo oscuro
let darkMode = prompt("Desea modo oscuro?")
//Si acepta se adhiere una imagen en body
if(darkMode != null){
    $body.style.color = " #7f7f7f";
    $body.classList.add("fondoMoviesList")
}
//Cambiamos el titulo
$h1.innerText = "LISTADO DE PELICULAS";
//Agregamos algunos estilos
$h1.style.color = "white";
$h1.style.backgroundColor = "teal";
$h1.style.padding = "20px";