var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite a primeira nota do aluno")
nota02 = prompt("Digite a segunda nota do aluno")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >=5)
    alert("Aprovado! Muito bem " + nome)
else
    alert("Reprovado! Estude mais " + nome)