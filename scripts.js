var alunas = new Array();

cadastraAluna("Rafaela");
cadastraAluna("Fernanda");
cadastraAluna("Nayara");
cadastraAluna("Maria");
cadastraAluna("Lara");
cadastraAluna("Jussara");
cadastraAluna("Joice");

alteraNota("Rafaela", 4.8);
alteraNota("Fernanda", 7);
alteraNota("Nayara", 8);
alteraNota("Maria", 9.5);
alteraNota("Jussara", 0);

ordenaAlunas("matricula");

situacaoAluna("Paula");
situacaoTurma();

imprima(" ");

if (menorNota() > -1);
imprima(" Menor nota da turma " + menorNota());
if (maiorNota() > -1);
imprima(" Maior nota da turma " + maiorNota());

imprima(" ");
imprima(" Média de nota da turma " + calculaMedia());

imprima(" ");

imprimeTabela("nome");
imprima(" ");
situacaoTurma();

console.log(alunas);

function cadastraAluna(nome) {
	alunas.push([geraMatricula(), nome, null])
}

function geraMatricula() {
	return alunas.length + 1;
}

function localizaAlunaNome(nome) {
	for (let i = 0; i < alunas.length; i++) {
		if (alunas[i][1] == nome) {
			return i;
		}
	}
	return -1;
}

function alteraNota(nome, nota) {
	let posicao = localizaAlunaNome(nome);
	if (posicao > -1) {
		if (nota >= 0 && nota <= 10) {
			alunas[posicao][2] = nota;
		}
		else {
			imprima("Nota inválida.");
		}
	} else {
		imprima("Aluna " + nome + " não encontrada.");
	}
}

function ordenaAlunas(chave, ordem) {
	if (chave != "matricula" && chave != "nome" && chave != "nota") {
		imprima("Chave de ordenação inválida");
	} else {
		if (chave == "nota") {
			alunas.sort(function (a, b) {
				return a[2] - b[2];
			});
		}
		if (chave == "matricula") {
			alunas.sort(function (a, b) {
				return a[0] - b[0];
			});
		}
		if (chave == "nome") {
			alunas.sort(function (a, b) {
				return a[1].localeCompare(b[1]);
			});
		}
		if (ordem == 'decrescente') {
			alunas.reverse();
		}
	}
}

function situacaoAluna(nome) {
	let posicao = localizaAlunaNome(nome);
	let nota;
	if (posicao > -1) {
		nota = alunas[posicao][2];
		if (nota == null) {
			imprima("Situação da aluna " + nome + " está indefinida.");
		} else {
			if (nota < 5) {
				imprima("A aluna " + nome + " está reprovada.");
			}
			if (nota >= 5 && nota < 7) {
				imprima("A aluna " + nome + " está em recuperação.");
			}
			if (nota >= 7) {
				imprima("A aluna " + nome + " está aprovada.");
			}
		}
	} else {
		imprima("Aluna " + nome + " não encontrada.");
	}
}

function situacaoTurma() {
	for (let i of alunas) {
		situacaoAluna(i[1]);
	}
}

function calculaMedia() {
	let soma = null;
	for (let i of alunas) {
		soma += i[2];
	}
	return (soma / alunas.length).toFixed(1);
}

function menorNota() {
	ordenaAlunas("nota");
	for (let i of alunas) {
		if (i[2] != null) {
			return i[2];
		}
	}
	return -1;
}

function maiorNota() {
	ordenaAlunas("nota", "decrescente");
	for (let i of alunas) {
		if (i[2] != null) {
			return i[2];
		}
	}
	return -1;
}

function imprimeTabela(chave, ordem) {
	ordenaAlunas(chave, ordem);
	document.write("<table>");
	document.write("<tr>");
	document.write("<th>Matrícula</th>");
	document.write("<th>Nome</th>");
	document.write("<th>Nota</th>");
	document.write("</tr>");
	for (let i of alunas) {
		document.write("<tr>");
		document.write("<td>" + i[0] + "</td>");
		document.write("<td>" + i[1] + "</td>");
		if (i[2] == null)
			document.write("<td> - </td>");
		else {
			document.write("<td>" + i[2] + "</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

function imprima(texto) {
	document.write(texto + "<br>");
}

function formataNumero(valor) {
	return new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(valor);
}

function formataMoeda(valor) {
	let padraoBR = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return padraoBR.format(valor);
}