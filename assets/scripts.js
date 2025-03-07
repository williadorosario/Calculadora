function adicionarCaracter(caracter) {

    const inputValor = document.querySelector(".display").value

    document.querySelector('.display').value = inputValor + caracter


}
function limparTela() {
    document.querySelector('.display').value = ''

}

function calcular() {
    const inputValor = document.querySelector(".display").value
    document.querySelector('.display').value = eval(inputValor)


}


function inverte() {
    const inputValor = document.querySelector(".display").value
    document.querySelector('.display').value = inputValor * -1
}

