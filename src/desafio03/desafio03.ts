// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let soma = document.getElementById('soma') as HTMLInputElement
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement

campoSaldo.innerHTML = "0"
let saldoTotal: number = 0

function somarAoSaldo(soma: number) {
  saldoTotal += soma
  campoSaldo.innerHTML = saldoTotal.toString();
}

function limparSaldo() {
  campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
  limparSaldo();
});
