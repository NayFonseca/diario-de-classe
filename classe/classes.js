class Aluno {
    matricula;
    nome;
    nota = null;
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
    alteraNota(nota) {
        this.nota = nota;
    }
}

class Turma {
    alunos = new Array();
    ultMatricula = 0;
    constructor() {}
    cadastraAluno(nome) {
        this.alunos.push(new Aluno(++this.ultMatricula,nome))
    }
    removeAluno(nome) {
        let posicao = this.localizaAluno(nome);
        if(posicao > -1) {
            this.alunos.splice(posicao,1);
        } else {
            console.log("Aluno " + nome + " não encontrado.")
        }
    }
    localizaAluno(nome) {
        for(let i = 0; i < this.alunos.length; i++) {
            if(this.alunos[i].nome == nome) {
                return i;
            }
        }
        return -1;
    }
    alteraNota(nome, nota) {
        let posicao = this.localizaAluno(nome);
        if(posicao > -1) {
            this.alunos[posicao].alteraNota(nota);
        } else {
            console.log("Aluno " + nome + " não encontrado.")
        }

    }
    media() {
    let soma = 0;
    for(let linha of this.alunos) {
        soma += linha.nota;
    }
    return soma / this.alunos.length;
    }
}
