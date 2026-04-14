let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTO_LIMON=20;
const ANCHO_LIMON=20;
let personajeX=canvas.width/2;
let limonX=canvas.width/2;
let limonY=5;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo(){
    ctx.fillStyle = "#6c3a09f5";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle= "#219dc6f5";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
}


function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon(){
    ctx.fillStyle= "#05d013f5";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
}