import validaDado from "./valida.js"

var nome = document.getElementById('nomeCompleto')
var cpf = document.getElementById('CPF')
var endereco = document.getElementById('endereco')
var numero = document.getElementById('numero')
var numCelular = document.getElementById('telCelular')


var botao = document.getElementById('botaoSubmit')

botao.addEventListener('click',()=>{validaDado(nome,cpf,endereco,numero,numCelular)})