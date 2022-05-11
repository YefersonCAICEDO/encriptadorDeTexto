var inputTexto = document.querySelector(".textArea1");
var mensaje = document.querySelector(".textArea2");
const pasteBtn = document.getElementById('paste-btn');
const copy = document.getElementById("copy");
const limpiar = document.getElementById("limpiar");
const form = document.getElementById("form");


function buttonEncriptar() {
    var textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
    if (inputTexto.value == '') {
        alert('Ingrese texto para Encriptar')
        inputTxt.focus()
    }

    let asignacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
        ["ñ", "uf"],
        ["1", "atr"],
        ["2", "btr"],
        ["3", "ctr"],
        ["4", "dtr"],
        ["5", "etr"],
        ["6", "ftr"],
        ["7", "gtr"],
        ["8", "htr"],
        ["9", "itr"],
        ["0", "jtr"]

    ]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for (let i = 0; i < asignacion.length; i++) {
        if (StringParaEncriptar.includes(asignacion[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(asignacion[i][0], asignacion[i][1])
        }
    }

    return StringParaEncriptar;


}

function buttonDesencriptar() {
    var textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(StringParaDesencriptar) {
    if (inputTexto.value == '') {
        alert('Ingrese texto para Desencriptar');
        inputTxt.focus()
    }

    let asignacion2 = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"],
        ["uf", "ñ"],
        ["atr", "1"],
        ["btr", "2"],
        ["ctr", "3"],
        ["dtr", "4"],
        ["etr", "5"],
        ["ftr", "6"],
        ["gtr", "7"],
        ["htr", "8"],
        ["itr", "9"],
        ["jtr", "0"]
    ]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();

    for (ii = 0; ii < asignacion2.length; ii++) {
        if (StringParaDesencriptar.includes(asignacion2[ii][0])) {
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(asignacion2[ii][0], asignacion2[ii][1])

        }

    }

    return StringParaDesencriptar;

}

async function copyTxt(e) {
    if (mensaje.value == '') {
        alert('Primero Encripte/Desencripte para copiar');
        inputTxt.focus()
    }


    e.preventDefault()

    inputTexto.value = ''
    const textToCopy = await navigator.clipboard.writeText(mensaje.value)
    alert("Texto copiado");
    inputTxt.focus()
}
copy.addEventListener('click', copyTxt)


async function pasteTxt(e) {
    e.preventDefault()

    const textCopied = await navigator.clipboard.readText()
    inputTexto.value = textCopied
    mensaje.textContent = ''
}
pasteBtn.addEventListener('click', pasteTxt)

limpiar.addEventListener('click', (e) => {
    if (inputTexto.value == '') {
        alert('Campo limpio');
        inputTxt.focus()
    }
    e.preventDefault()

    if (form.classList.contains('show-result')) {
        form.classList.remove('show-result')
        hero.classList.remove('hide-hero')
    }
    inputTexto.value = ''
    inputTexto.focus()
})