



class piloto {
    constructor(nome, idade, equipe, nacionalidade, experiencia, habilidade, visao, ritmo, total) {
        this.nome = nome;
        this.idade = idade;
        this.equipe = equipe;
        this.nacionalidade = nacionalidade;
        this.experiencia = experiencia;
        this.habilidade = habilidade;
        this.visao = visao;
        this.ritmo = ritmo;
        this.total = total;
        this.pontos = 0;
    }
}
seunome = prompt("Digite seu nome: ")
suaidade = prompt("Digite sua idade: ")
suanacionalidade = prompt("Digite sua nacionalidade: ")
suaexperiencia = 50
suahabilidade = Math.floor(Math.random() * 70 + 30)
suavisao = Math.floor(Math.random() * 70 + 30)
seuritmo = Math.floor(Math.random() * 70 + 30)
suatotal = Math.floor(
    (suaexperiencia + suahabilidade + suavisao + seuritmo * 1.25) / 4
);
let seuPiloto = new piloto(seunome, suaidade, "", suanacionalidade, suaexperiencia, suahabilidade, suavisao, seuritmo, suatotal);


let max = {
    nome: "Max Verstappen",
    idade: 29,
    equipe: {"nome": "Red Bull Racing", "desempenho": 95},
    nacionalidade: "Holandês",
    experiencia: 88,
    habilidade: 96,
    visao: 82,
    ritmo: 97,
    total: 96,
    pontos: 0
};
let leclerc = {
    nome: "Charles Leclerc",
    idade: 29,
    equipe: {"nome": "Ferrari", "desempenho": 88},
    nacionalidade: "Monegasco",
    experiencia: 83,
    habilidade: 92,
    visao: 91,
    ritmo: 93,
    total: 93,
    pontos: 0
};
let hamilton = {
    nome: "Lewis Hamilton",
    idade: 41,
    equipe: {"nome": "Ferrari", "desempenho": 88},
    nacionalidade: "Britânico",
    experiencia: 98,
    habilidade: 93,
    visao: 91,
    ritmo: 90,
    total: 93,
    pontos: 0
};
let lando = {
    nome: "Lando Norris",
    idade: 26,
    equipe: {"nome": "McLaren", "desempenho": 87},
    nacionalidade: "Britânico",
    experiencia: 83,
    habilidade: 93,
    visao: 85,
    ritmo: 94,
    total: 93,
    pontos: 0
};
let piastri = {
    nome: "Oscar Piastri",
    idade: 25,
    equipe: {"nome": "McLaren", "desempenho": 87},
    nacionalidade: "Australiano",
    experiencia: 78,
    habilidade: 95,
    visao: 84,
    ritmo: 91,
    total: 92,
    pontos: 0
};
let George = {
    nome: "George Russell",
    idade: 28,
    equipe: {"nome": "Mercedes", "desempenho": 85},
    nacionalidade: "Britânico",
    experiencia: 83,
    habilidade: 94,
    visao: 93,
    ritmo: 92,
    total: 93,
    pontos: 0
};
let alonso = {
    nome: "Fernando Alonso",
    idade: 44,
    equipe: {"nome": "Aston Martin", "desempenho": 85},
    nacionalidade: "Espanhol",
    experiencia: 99,
    habilidade: 87,
    visao: 85,
    ritmo: 90,
    total: 90,
    pontos: 0
};
let antonelli = {
    nome: "kimi Antonelli",
    idade: 20,
    equipe: {"nome": "Mercedes", "desempenho": 85},
    nacionalidade: "Italiano",
    experiencia: 71,
    habilidade: 85,
    visao: 77,
    ritmo: 93,
    total: 89,
    pontos: 0
};
let gasly = {
    nome: "Pierre Gasly",
    idade: 30,
    equipe: {"nome": "Alpine", "desempenho": 86},
    nacionalidade: "Francês",
    experiencia: 83,
    habilidade: 84,
    visao: 78,
    ritmo: 86,
    total: 86,
    pontos: 0
};
let sainz = {
    nome: "Carlos Sainz",
    idade: 32,
    equipe: {"nome": "Williams", "desempenho": 86},
    nacionalidade: "Espanhol",
    experiencia: 98,
    habilidade: 87,
    visao: 80,
    ritmo: 85,
    total: 86,
    pontos: 0
};
let Hülkenberg = {
    nome: "Nico Hülkenberg",
    idade: 39,
    equipe: {"nome": "Audi", "desempenho": 85},
    nacionalidade: "Alemão",
    experiencia: 88,
    habilidade: 85,
    visao: 85,
    ritmo: 85,
    total: 86,
    pontos: 0
};
let perez = {
    nome: "Sergio Perez",
    idade: 36,
    equipe: {"nome": "Cadillac", "desempenho": 85},
    nacionalidade: "Mexicano",
    experiencia: 92,
    habilidade: 83,
    visao: 81,
    ritmo: 85,
    total: 86,
    pontos: 0
};
let hadjar = {
    nome: "Isack Hadjar",
    idade: 22,
    equipe: {"nome": "Red Bull Racing", "desempenho": 95},
    nacionalidade: "Francês",
    experiencia: 72,
    habilidade: 81,
    visao: 82,
    ritmo: 87,
    total: 85,
    pontos: 0
};
let Ocon = {
    nome: "Esteban Ocon",
    idade: 30,
    equipe: {"nome": "Haas", "desempenho": 75},
    nacionalidade: "Francês",
    experiencia: 83,
    habilidade: 85,
    visao: 84,
    ritmo: 84,
    total: 85,
    pontos: 0
};
let bearman = {
    nome: "Oliver Bearman",
    idade: 21,
    equipe: {"nome": "Haas", "desempenho": 75},
    nacionalidade: "Britânico",
    experiencia: 73,
    habilidade: 88,
    visao: 70,
    ritmo: 84,
    total: 84,
    pontos: 0
};
let albon = {
    nome: "Alexander Albon",
    idade: 30,
    equipe: {"nome": "Williams", "desempenho": 86},
    nacionalidade: "Tailandês",
    experiencia: 84,
    habilidade: 86,
    visao: 76,
    ritmo: 83,
    total: 84,
    pontos: 0
};
let bottas = {
    nome: "Valtteri Bottas",
    idade: 37,
    equipe: {"nome": "Cadillac", "desempenho": 85},
    nacionalidade: "Finlandês",
    experiencia: 89,
    habilidade: 76,
    visao: 93,
    ritmo: 83,
    total: 83,
    pontos: 0
};
let Bortoleto = {
    nome: "Gabriel Bortoleto",
    idade: 22,
    equipe: {"nome": "Audi", "desempenho": 78},
    nacionalidade: "Brasileiro",
    experiencia: 70,
    habilidade: 82,
    visao: 77,
    ritmo: 82,
    total: 82,
    pontos: 0 
};
let Lawson = {
    nome: "Liam Lawson",
    idade: 24,
    equipe: {"nome": "Racing Bulls", "desempenho": 82},
    nacionalidade: "Neozelandês",
    experiencia: 74,
    habilidade: 81,
    visao: 73,
    ritmo: 81,
    total: 81,
    pontos: 0
};
let Stroll = {
    nome: "Lance Stroll",
    idade: 27,
    equipe: {"nome": "Aston Martin", "desempenho": 72},
    nacionalidade: "Canadense",
    experiencia: 84,
    habilidade: 77,
    visao: 73,
    ritmo: 76,
    total: 78,
    pontos: 0
};
let Colapinto = {
    nome: "Franco Colapinto",
    idade: 23,
    equipe: {"nome": "Alpine", "desempenho": 80},
    nacionalidade: "Argentino",
    experiencia: 70,
    habilidade: 71,
    visao: 74,
    ritmo: 75,
    total: 74,
    pontos: 0
};
let Lindblad = {
    nome: "Arvid Lindblad",
    idade: 19,
    equipe: {"nome": "Racing Bulls", "desempenho": 82},
    nacionalidade: "Britânico",
    experiencia: 50,
    habilidade: 72,
    visao: 66,
    ritmo: 78,
    total: 74,
    pontos: 0
};
let pilotos = [
    max,
    leclerc,
    hamilton,
    lando,
    piastri,
    George,
    alonso,
    antonelli,
    gasly,
    sainz,
    Hülkenberg,
    perez,
    hadjar,
    Ocon,
    bearman,
    albon,
    bottas,
    Bortoleto,
    Lawson,
    Stroll,
    Colapinto,
    Lindblad
];

  let equipes = [
        {"nome": "McLaren", "desempenho": 87},       
        {"nome": "Red Bull Racing", "desempenho": 88},
        {"nome": "Mercedes", "desempenho": 90},
        {"nome": "Aston Martin", "desempenho": 72},
        {"nome": "Alpine", "desempenho": 80},
        {"nome": "Williams", "desempenho": 73},
        {"nome": "Racing Bulls", "desempenho": 82},
        {"nome": "Haas", "desempenho": 75},
        {"nome": "Audi", "desempenho": 78},
        {"nome": "Cadillac", "desempenho": 71}
    ];

function substituirPiloto(pilotos, seuPiloto) {

    console.log("===== ESCOLHA SUA EQUIPE =====");

    for (let i = 0; i < equipes.length; i++) {
        console.log((i + 1) + " - " + equipes[i].nome);
    }

    let escolhaEquipe = Number(
        prompt("Digite o número da equipe que deseja integrar:")
    );

    while (escolhaEquipe < 1 ||
           escolhaEquipe > equipes.length ||
           escolhaEquipe % 1 !== 0) {

        escolhaEquipe = Number(
            prompt("Opção inválida! Escolha uma equipe de 1 a 11:")
        );
    }

    let equipeEscolhida = equipes[escolhaEquipe - 1];

 
    let pilotosDaEquipe = [];

    for (let i = 0; i < pilotos.length; i++) {

        if (pilotos[i].equipe.nome === equipeEscolhida.nome) {
            pilotosDaEquipe.push(i);
        }
    }


    if (pilotosDaEquipe.length !== 2) {

        alert(
            "Erro: a equipe " + equipeEscolhida.nome +
            " não possui exatamente dois pilotos cadastrados."
        );

        return false;
    }

    console.log("===== PILOTOS DA EQUIPE =====");

    for (let i = 0; i < pilotosDaEquipe.length; i++) {

        let indice = pilotosDaEquipe[i];

        console.log(
            (i + 1) + " - " + pilotos[indice].nome
        );
    }

    let escolhaPiloto = Number(
        prompt(
            "Qual piloto deseja substituir?\n" +
            "1 - " + pilotos[pilotosDaEquipe[0]].nome + "\n" +
            "2 - " + pilotos[pilotosDaEquipe[1]].nome
        )
    );

    while (escolhaPiloto !== 1 && escolhaPiloto !== 2) {

        escolhaPiloto = Number(
            prompt("Opção inválida! Digite 1 ou 2:")
        );
    }

    let indiceSubstituido = pilotosDaEquipe[escolhaPiloto - 1];

    let pilotoSubstituido = pilotos[indiceSubstituido];

    seuPiloto.equipe = { nome: equipeEscolhida.nome, desempenho: equipeEscolhida.desempenho };
  

    pilotos[indiceSubstituido] = seuPiloto;

    alert(
        "CONTRATAÇÃO CONFIRMADA!\n\n" +
        seuPiloto.nome + " entrou na equipe " +
        equipeEscolhida.nome + ".\n\n" +
        pilotoSubstituido.nome +
        " foi substituído."
    );

    return true;
}
substituirPiloto(pilotos, seuPiloto);

alert("Seu piloto foi criado com sucesso! \nNome: " + seuPiloto.nome + "\nIdade: " + seuPiloto.idade + "\nEquipe: " + seuPiloto.equipe.nome + "\nNacionalidade: " + seuPiloto.nacionalidade + "\nExperiência: " + seuPiloto.experiencia + "\nHabilidade: " + seuPiloto.habilidade + "\nVisão: " + seuPiloto.visao + "\nRitmo: " + seuPiloto.ritmo + "\nTotal: " + seuPiloto.total)


function classificatorio(pilotos, equipes) {

    for (let i = 0; i < pilotos.length; i++) {

        pilotos[i].volta =
            (90 + Math.random() * 4) -
            (pilotos[i].habilidade * 0.2) -
            (pilotos[i].experiencia * 0.1) -
            (pilotos[i].equipe.desempenho * 0.1);
    }

  
    let temporario = [...pilotos];

    let resultados = [];

    for (let i = 0; i < pilotos.length; i++) {

        let menor = Infinity;
        let posicao = -1;

        for (let j = 0; j < temporario.length; j++) {

           if (temporario[j] != undefined && temporario[j].volta < menor) {

                menor = temporario[j].volta;
                posicao = j;
            }
        }
if (posicao === -1) {
    break;
}
        resultados.push(temporario[posicao]);

        temporario.splice(posicao, 1);
    }

    
    console.log("===== RESULTADOS DO CLASSIFICATÓRIO =====");
    console.log("Posição | Piloto | Equipe | Volta");

    for (let i = 0; i < resultados.length; i++) {
        console.log(
            (i + 1) + "º | " +
            resultados[i].nome + " | " +
            resultados[i].equipe.nome + " | " +
            resultados[i].volta.toFixed(3) + " s"
        );
    }
return resultados;
}
function corrida(pilotos, equipes) {
    for (let i = 0; i < pilotos.length; i++) {
        pilotos[i].tempoTotal =
            (pilotos[i].volta * 50) -
            Math.random() * 80 -
            (pilotos[i].habilidade * 0.2) -
            (pilotos[i].experiencia * 0.1) -
            (pilotos[i].equipe.desempenho * 0.1) -
            (pilotos[i].ritmo * 0.1) -
            (pilotos[i].visao * 0.1) -
            (pilotos[i].total * 0.1);
    }

    let temporario = [...pilotos];
    let resultados = [];

    for (let i = 0; i < pilotos.length; i++) {
        let menor = Infinity;
        let posicao = -1;

        for (let j = 0; j < temporario.length; j++) {
            if (temporario[j] != undefined && temporario[j].tempoTotal < menor) {
                menor = temporario[j].tempoTotal;
                posicao = j;
            }
        }

        if (posicao === -1) {
            break;
        }

        resultados.push(temporario[posicao]);
        temporario.splice(posicao, 1);
    }

    console.log("===== RESULTADOS DA CORRIDA =====");
    console.log("Posição | Piloto | Equipe | Tempo");

    for (let i = 0; i < resultados.length; i++) {
        console.log(
            (i + 1) + "º | " +
            resultados[i].nome + " | " +
            resultados[i].equipe.nome + " | " +
            resultados[i].tempoTotal.toFixed(3) + " s"
        );
    }

    return resultados;
}
for (let i = 0; i < 24; i++) {
    classificatorio(pilotos, equipes);
    let resultados = corrida(pilotos, equipes);

   let pontosCorrida = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

for (let j = 0; j < 10; j++) {
    resultados[j].pontos += pontosCorrida[j];
}
  
        let temporario = [...pilotos];

    let tabeladepontos = [];

    for (let i = 0; i < pilotos.length; i++) {

        let maior = -Infinity;
        let posicao = -1;

        for (let j = 0; j < temporario.length; j++) {

           if (temporario[j] != undefined && temporario[j].pontos > maior) {

                maior = temporario[j].pontos;
                posicao = j;
            }
        }
if (posicao === -1) {
    break;
}
        tabeladepontos.push(temporario[posicao]);

        temporario.splice(posicao, 1);
    }

console.log("===== TABELA DE PONTOS =====");
    console.log("Posição | Piloto | Equipe | Pontos");

    for (let i = 0; i < tabeladepontos.length; i++) {
        console.log(
            (i + 1) + "º | " +
            tabeladepontos[i].nome + " | " +
            tabeladepontos[i].equipe.nome + " | " +
            tabeladepontos[i].pontos
        );
    }
    console.log("===== DESEJA CONTINUAR? =====");
console.log("1 - Sim");
console.log("2 - Não");

opcao = prompt("Digite o número da opção desejada:");
    if (opcao == 2) {
    break;
}
}

