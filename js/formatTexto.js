function formataCPF(cpf){
    const elemento = cpf 
    const cpfAtual = cpf.value

    let cpfAtualizado
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function ( regex, argumento1, argumento2, argumenoto3,argumento4) {
        return argumento1 + '.' + argumento2 + '.' + argumenoto3 + '-' + argumento4
    })  
    elemento.value = cpfAtualizado
}