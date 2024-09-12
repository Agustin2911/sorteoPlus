function agregar_participantes(){
    const usuario = input.value;
    if (usuario) {
        contenedor_participantes.innerHTML += "<div data-value='" + cont + "' class='usuario'>@" + usuario + "</div>";
        usuarios.push(usuario);
        cont += 1;
    }
}

async function mostrar_ganadores(){
    let select = sessionStorage.getItem('select');
    console.log(select);
    
    if (select === "2") {
        
        nombres = JSON.parse(sessionStorage.getItem('nombres'));
        
        if (nombres) {
            nombres.forEach(function(Element) {
                contenedor_ganadores.innerHTML += "<div class='usuario'>@" + Element + "</div>";
            });
        } else {
            console.log("No hay nombres almacenados en sessionStorage.");
        }

        sessionStorage.setItem('select', "1");
    } else {
        const ganadores = await conseguir_ganadores();
        ganadores.forEach(function(Element) {
            contenedor_ganadores.innerHTML += "<div class='usuario'>@" + Element + "</div>";
        });
    }
}



function conseguir_ganadores(){
    let usuarios_ganadores = [];
    let i = 0;
    
    while (i < parseInt(cantidad.value)) {
        let index = Math.floor(Math.random() * usuarios.length);
        if (!usuarios_ganadores.includes(usuarios[index])) {
            usuarios_ganadores.push(usuarios[index]);
            console.log(usuarios[index]);
            i += 1;
        }
    }
    
    return usuarios_ganadores;
}

function agregar(){
    const usuario = input_2.value;
    if (usuario) {
        caja_nombre.innerHTML += "<div data-value='" + cont + "' class='usuario'>@" + usuario + "</div>";
        nombres.push(usuario);
        cont += 1;
    }
}

function ir_home(){
    
    sessionStorage.setItem('nombres', JSON.stringify(nombres)); 
    sessionStorage.setItem('select', select.value);
    
    window.location.href = './index.html';
}

// Variables
const caja_nombre = document.getElementById("nombres");
let nombres = [];
const input_2 = document.getElementById("input_2");
let select = document.getElementById("select");

let cont = 0;
const contenedor_participantes = document.getElementById("participantes");
const contenedor_ganadores = document.getElementById("caja-resultados");
const boton_participantes = document.getElementById("boton_participantes");
const boton_ganadores = document.getElementById("boton_ganadores");
const input = document.getElementById("input-jugador");
const cantidad = document.getElementById("input");
const ganadores = [];
const usuarios = [];
