let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTURA_LIMON=20;
const ANCHO_LIMON=20;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;
let puntaje=0;
let vidas=3;
let velocidadCaida=200;
let intervalo;

function iniciar(){
    intervalo=setInterval(bajarLimon,velocidadCaida);//recibe como 1ro parametro una funcion y como 2do parametro tiempo en milisegundos
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle = "#6c3a09f5";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle= "#219dc6f5";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
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
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    if(limonX+ANCHO_LIMON>personajeX &&
        limonX<personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON>personajeY &&
        limonY<personajeY+ALTURA_PERSONAJE
    ){
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje", puntaje);
        if(puntaje==3){
            velocidadCaida=150;
            reiniciarIntervalo();
        }if(puntaje==6){
            velocidadCaida=100;
            reiniciarIntervalo();
        }if(puntaje==10){
            alert("TIENES LOS LIMONES, AHORA TE FALTA SAL Y TEQUILA");
            vidas=3;
            puntaje=0;
            velocidadCaida=200;
            mostrarEnSpan("txtVidas",vidas);
            mostrarEnSpan("txtPuntaje",puntaje);
            reiniciarIntervalo();
        }
    }
}

function detectarPiso(){
    if(limonY+ALTURA_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1;
        mostrarEnSpan("txtVidas",vidas);
    }
    if(vidas<=0){
        alert("GAME OVER!!!");
        vidas=3;
        puntaje=0;
        velocidadCaida=200;
        mostrarEnSpan("txtVidas",vidas);
        mostrarEnSpan("txtPuntaje",puntaje);
        reiniciarIntervalo();
    }
}

function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}

function reiniciarIntervalo(){
    clearInterval(intervalo);
    intervalo = setInterval(bajarLimon, velocidadCaida);
}

function reiniciar(){
    vidas=3;
    puntaje=0;
    velocidadCaida=200;
    clearInterval(intervalo);
    mostrarEnSpan("txtVidas",vidas);
    mostrarEnSpan("txtPuntaje",puntaje);
    iniciar();
}