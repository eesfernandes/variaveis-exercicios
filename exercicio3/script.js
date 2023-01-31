const nomeCompleto = prompt('Nome Completo: ');
const dataNasc = prompt('Data de nascimento [Ex. 00/00/00]: ');
let endereco = prompt('Endereço: ');
const cpf = parseInt(prompt('CPF: '));
let escolaridade = prompt('Escolaridade: ');
const cnh = prompt('Possui CNH [Sim ou Não]: ');
let filhos = parseInt(prompt('Quantidade de filhos: '));
let cargoAtual = prompt('Cargo atual: ');
let salarioAtual = parseFloat(prompt('Salário: '));
// Nesse campo entraria condicionais, mas não é o caso no momento.
const comissao = parseFloat(prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero: '));
const anoAdmissao = parseInt(prompt('Ano de admissão [Ex. 0000]: '));
// Imprimi no console o tipo de todas as variaveis
console.log('Tipo da variavel nomeCompleto:',typeof nomeCompleto);
console.log('Tipo da variavel dataNasc:',typeof dataNasc);
console.log('Tipo da variavel endereco:',typeof endereco);
console.log('Tipo da variavel escolaridade:', typeof escolaridade);
console.log('Tipo da variavel cpf:',typeof cpf);
console.log('Tipo da variavel cnh:', typeof cnh);
console.log('Tipo da variavel filhos:',typeof filhos);
console.log('Tipo da variavel cargoAtual:',typeof cargoAtual);
console.log('Tipo da variavel salarioAtual:',typeof salarioAtual);
console.log('Tipo da variavel comissao:',typeof comissao);
console.log('Tipo da variavel anoAdmissao:',typeof anoAdmissao);
// Imprimi no console um relatório da pessoa colaboradora
console.log(`Relatório da pessoa colaborador:
Nome: ${nomeCompleto}
Data de Nascimento: ${dataNasc}
Endereço: ${endereco}
CPF: ${cpf}
Escolaridade: ${escolaridade}
CNH: ${cnh}
Quantidade de filhos: ${filhos}
Cargo Atual: ${cargoAtual}
Salário Atual: R$${salarioAtual.toFixed(2)} 
Comissão: ${comissao}
Ano Admissão: ${anoAdmissao}`)