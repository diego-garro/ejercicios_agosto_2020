const verde = document.getElementById('verde')
const rojo = document.getElementById('rojo')
const amarillo = document.getElementById('amarillo')
const azul = document.getElementById('azul')
const botonEmpezar = document.getElementById('btn-empezar')
botonEmpezar.addEventListener('click', jugar)

// Número de niveles, en caso de querer más niveles solo agregue los 
// elementos tipo array a la lista de acuerdo al número de niveles deseado.
// Deben estar vacíos ya que se rellenarán aleatoriamente.
let niveles = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
let nivel = 0

function limpiarNiveles() {
    for (let i = 0; i < niveles.length; i++) {
        niveles[i] = []
    }
}

function iluminar(color) {
    color.classList.add('light')
}

function opacar(color) {
    color.classList.remove('light')
}

function parpadear(color) {
    iluminar(color)
    //console.log(`Valor del Indice desde parpadear: ${indice}`)
    setTimeout(() => opacar(color), 350)
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function generarNiveles() {
    limpiarNiveles()
    for (let i = 0; i < niveles.length; i++) {
        for (let j = 0; j <= i; j++) {
            niveles[i].push(numeroAleatorio(1, 5))
        }
    }
}

function valor2color(valor) {
    switch (valor) {
        case 1:
            return 'verde'
        case 2:
            return 'rojo'
        case 3:
            return 'amarillo'
        case 4:
            return 'azul'
        default:
            return 'verde'
    }
}

function color2valor(color) {
    switch (color) {
        case 'verde':
            return 1
        case 'rojo':
            return 2
        case 'amarillo':
            return 3
        case 'azul':
            return 4
        default:
            return 1
    }
}

function iluminarSecuencia(nivel) {
    let color = ''
    for (let i = 0; i < niveles[nivel].length; i++) {
        color = valor2color(niveles[nivel][i])
        switch (color) {
            case 'verde':
                setTimeout(() => parpadear(verde), 1000 * i)
                break
            case 'rojo':
                setTimeout(() => parpadear(rojo), 1000 * i)
                break
            case 'amarillo':
                setTimeout(() => parpadear(amarillo), 1000 * i)
                break
            case 'azul':
                setTimeout(() => parpadear(azul), 1000 * i)
                break
            default:
                console.log('Color no válido')
                break
        }
    }
}

function elegirColor(ev) {
    console.log(ev.type)
    console.log("Se hizo click en el color")
}

function agregarEventosAColores() {
    verde.addEventListener('click', elegirColor, false)
    rojo.addEventListener('click', elegirColor, false)
    amarillo.addEventListener('click', elegirColor, false)
    azul.addEventListener('click', elegirColor, false)
}

function eliminarEventosAColores() {
    verde.removeEventListener('click', elegirColor, false)
    rojo.removeEventListener('click', elegirColor, false)
    amarillo.removeEventListener('click', elegirColor, false)
    azul.removeEventListener('click', elegirColor, false)
}

function toggleBotonEmpezar() {
    if (botonEmpezar.classList.contains('hide')) {
        botonEmpezar.classList.remove('hide')
    } else {
        botonEmpezar.classList.add('hide')
    }
}

function jugar() {
    let secuenciaUsuario = []
    toggleBotonEmpezar()
    generarNiveles()
    agregarEventosAColores()
    for (let i = 0; i < niveles.length; i++) {
        setTimeout(() => iluminarSecuencia(i), 1000 * i)
        console.log(niveles[i])
    }
    toggleBotonEmpezar()
}