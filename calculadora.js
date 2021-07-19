function calcular() {
    var operacao = document.getElementById('operacao').value;

    var num1 = document.getElementById('num1').value;

    var num2 = document.getElementById('num2').value;

    //forçando o tipo de variável
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 == '' || num1 == null) {
        alert('Insira um número válido para (num1)');
        return false;
    }

    if (num2 == '' || num2 == null) {
        alert('Insira um número válido (num2)');
        return false;
    }

    var resultado = null;

    switch (operacao) {

        case '1': //subtracao
            resultado = num1 - num2;
            break;

        case '2': //adição
            resultado = num1 + num2;
            break;

        case '3': //multiplicação
            resultado = num1 * num2;
            break;

        case '4': //divisão
            resultado = num1 / num2;
            break;

        default:
            alert('A opção selecionada é inválida');
            return false;
    }

    document.getElementById('resultado').value = resultado;
}