function Encriptar() {
    let textoIngresado = document.querySelector('.texto-ingresado').value;
    let textoEncriptado = '';

    for (let i = 0; i < textoIngresado.length; i++) {
        let letra = textoIngresado[i];
        switch (letra) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += letra;
        }
    }

    document.querySelector('.texto-salida').value = textoEncriptado;
}

function Desencriptar() {
    let textoIngresado = document.querySelector('.texto-ingresado').value;
    let textoDesencriptado = '';

    textoDesencriptado = textoIngresado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.texto-salida').value = textoDesencriptado;
}

document.querySelector('#btnCopiar').addEventListener('click', function() {
    let textoSalida = document.querySelector('.texto-salida');
    textoSalida.select();
    
    try {
        document.execCommand('copy');
        alert('El texto fue copiado');
        textoSalida.value = '';
    } catch (err) {
        console.error('Error al copiar el texto:', err);
        alert('No se pudo copiar el texto. Por favor, copie manualmente.');
    }
});


document.querySelector('.Encriptar').addEventListener('click', Encriptar);
document.querySelector('.Desencriptar').addEventListener('click', Desencriptar);

