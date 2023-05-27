// Esto no lo pide pero me acostumbre a usarlo
let qs = (select) =>{
return document.querySelector(select);
}

//Capturo los elementos que pide la consigna
let $main = qs("main");
let $h2 = qs("h2");
let $a = qs("a");
let $p = document.querySelectorAll("p");

//Pregunto al usuario su nombre
let user = prompt("Ingrese su nombre")

//Si el usuario da su nombre lo agrego al h2. Si no da nombre agrega "invitado" al h2
if(user){
    $h2.innerText = user;
}else{
    $h2.innerText ="invitado";
}

//Agregamos uppercase al h2
$h2.style.textTransform = " uppercase";

//Ponemos el color que piden para el ancla
$a.style.color = "#E51B3E";

//Preguntamos al usuario si quiere poner un fondo
let fondoDePantalla = confirm("Desea colorcar un fondo de pantalla?");
//Si confirma, se lo agregamos
if(fondoDePantalla){
    qs("body").classList.add("fondo")
}

//Iteramos los parrafos para destacar por par o impar
$p.forEach((p, i)=> {
    if(i % 2 == 0){
        p.classList.add("descatadoPar")
    } else {
        p.classList.add("descatadoImpar")
    }
})

//Mostramos la vista
$main.style.display = "block"
