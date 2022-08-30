let manha = new Turma();
manha.cadastraAluno("Rafaela");
manha.cadastraAluno("Fernanda");
manha.cadastraAluno("Nayara");

manha.cadastraAluno("Mafalda");
manha.removeAluno("Mafalda");
manha.cadastraAluno("Maria");

manha.alteraNota("Rafaela", 4.8);
manha.alteraNota("Fernanda", 7);
manha.alteraNota("Nayara", 6.99);

console.log((manha.media()).toFixed(2));
console.log(manha);

var paragrafo = document.createElement("p");
paragrafo.innerHTML = "Alô mundo !";
paragrafo.style = "color: red";
var alvo = document.getElementsByTagName("body")[0];
alvo.appendChild(paragrafo);

function imprima(texto) {
	document.write(texto + "<br>");
}
