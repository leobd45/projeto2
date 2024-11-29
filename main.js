const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado Reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMedia();

});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputrNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade: ${inputNomeAtividade.value} ja foi inserida`); 
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputrNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputrNotaAtividade.value}</td>`;
        linha += `<td>${inputrNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha;
    }

   

    inputNomeAtividade.value = '';
    inputrNotaAtividade.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
function atualizaMedia(){
  const mediaFinal = calculaMedia();  

  document.getElementById('media-final-valor').innerHTML = mediaFinal;
  document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


}
function calculaMedia(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}