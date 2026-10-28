



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
let seuPiloto = new piloto(seunome, suaidade, suanacionalidade, suaexperiencia, suahabilidade, suavisao, seuritmo, suatotal)


let max = {
    nome: "Max Verstappen",
    idade: 29,
    equipe: "Red Bull Racing",
    nacionalidade: "Holandês",
    experiencia: 88,
    habilidade: 96,
    visao: 82,
    ritmo: 97,
    total: 96
};
let leclerc = {
    nome: "Charles Leclerc",
    idade: 29,
    equipe: "Ferrari",
    nacionalidade: "Monegasco",
    experiencia: 83,
    habilidade: 92,
    visao: 91,
    ritmo: 93,
    total: 93
};
let hamilton = {
    nome: "Lewis Hamilton",
    idade: 41,
    equipe: "Ferrari",
    nacionalidade: "Britânico",
    experiencia: 98,
    habilidade: 93,
    visao: 91,
    ritmo: 90,
    total: 93
};
let lando = {
    nome: "Lando Norris",
    idade: 26,
    equipe: "McLaren",
    nacionalidade: "Britânico",
    experiencia: 83,
    habilidade: 93,
    visao: 85,
    ritmo: 94,
    total: 93
};
let piastri = {
    nome: "Oscar Piastri",
    idade: 25,
    equipe: "McLaren",
    nacionalidade: "Australiano",
    experiencia: 78,
    habilidade: 95,
    visao: 84,
    ritmo: 91,
    total: 92
};
let George = {
    nome: "George Russell",
    idade: 28,
    equipe: "Mercedes",
    nacionalidade: "Britânico",
    experiencia: 83,
    habilidade: 94,
    visao: 93,
    ritmo: 92,
    total: 93
};
let alonso = {
    nome: "Fernando Alonso",
    idade: 44,
    equipe: "Aston Martin",
    nacionalidade: "Espanhol",
    experiencia: 99,
    habilidade: 87,
    visao: 85,
    ritmo: 90,
    total: 90
};
let antonelli = {
    nome: "kimi Antonelli",
    idade: 20,
    equipe: "Mercedes",
    nacionalidade: "Italiano",
    experiencia: 71,
    habilidade: 85,
    visao: 77,
    ritmo: 93,
    total: 89
};
let gasly = {
    nome: "Pierre Gasly",
    idade: 30,
    equipe: "Alpine",
    nacionalidade: "Francês",
    experiencia: 83,
    habilidade: 84,
    visao: 78,
    ritmo: 86,
    total: 86
};
let sainz = {
    nome: "Carlos Sainz",
    idade: 32,
    equipe: "Williams",
    nacionalidade: "Espanhol",
    experiencia: 98,
    habilidade: 87,
    visao: 80,
    ritmo: 85,
    total: 86
};
let Hülkenberg = {
    nome: "Nico Hülkenberg",
    idade: 39,
    equipe: "Audi",
    nacionalidade: "Alemão",
    experiencia: 88,
    habilidade: 85,
    visao: 85,
    ritmo: 85,
    total: 86
};
let perez = {
    nome: "Sergio Perez",
    idade: 36,
    equipe: "Cadillac",
    nacionalidade: "Mexicano",
    experiencia: 92,
    habilidade: 83,
    visao: 81,
    ritmo: 85,
    total: 86
};
let hadjar = {
    nome: "Isack Hadjar",
    idade: 22,
    equipe: "Red Bull Racing",
    nacionalidade: "Francês",
    experiencia: 72,
    habilidade: 81,
    visao: 82,
    ritmo: 87,
    total: 85
};
let Ocon = {
    nome: "Esteban Ocon",
    idade: 30,
    equipe: "Haas",
    nacionalidade: "Francês",
    experiencia: 83,
    habilidade: 85,
    visao: 84,
    ritmo: 84,
    total: 85
};
let bearman = {
    nome: "Oliver Bearman",
    idade: 21,
    equipe: "Haas",
    nacionalidade: "Britânico",
    experiencia: 73,
    habilidade: 88,
    visao: 70,
    ritmo: 84,
    total: 84
};
let albon = {
    nome: "Alexander Albon",
    idade: 30,
    equipe: "Williams",
    nacionalidade: "Tailandês",
    experiencia: 84,
    habilidade: 86,
    visao: 76,
    ritmo: 83,
    total: 84
};
let bottas = {
    nome: "Valtteri Bottas",
    idade: 37,
    equipe: "Cadillac",
    nacionalidade: "Finlandês",
    experiencia: 89,
    habilidade: 76,
    visao: 93,
    ritmo: 83,
    total: 83
};
let Bortoleto = {
    nome: "Gabriel Bortoleto",
    idade: 22,
    equipe: "Audi",
    nacionalidade: "Brasileiro",
    experiencia: 70,
    habilidade: 82,
    visao: 77,
    ritmo: 82,
    total: 82
};
let Lawson = {
    nome: "Liam Lawson",
    idade: 24,
    equipe: "Racing Bulls",
    nacionalidade: "Neozelandês",
    experiencia: 74,
    habilidade: 81,
    visao: 73,
    ritmo: 81,
    total: 81
};
let Stroll = {
    nome: "Lance Stroll",
    idade: 27,
    equipe: "Aston Martin",
    nacionalidade: "Canadense",
    experiencia: 84,
    habilidade: 77,
    visao: 73,
    ritmo: 76,
    total: 78
};
let Colapinto = {
    nome: "Franco Colapinto",
    idade: 23,
    equipe: "Alpine",
    nacionalidade: "Argentino",
    experiencia: 70,
    habilidade: 71,
    visao: 74,
    ritmo: 75,
    total: 74
};
let Lindblad = {
    nome: "Arvid Lindblad",
    idade: 19,
    equipe: "Racing Bulls",
    nacionalidade: "Britânico",
    experiencia: 50,
    habilidade: 72,
    visao: 66,
    ritmo: 78,
    total: 74
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


function substituirPiloto(pilotos, seuPiloto) {

    let equipes = [
        "McLaren",
        "Ferrari",
        "Red Bull Racing",
        "Mercedes",
        "Aston Martin",
        "Alpine",
        "Williams",
        "Racing Bulls",
        "Haas",
        "Audi",
        "Cadillac"
    ];

    console.log("===== ESCOLHA SUA EQUIPE =====");

    for (let i = 0; i < equipes.length; i++) {
        console.log((i + 1) + " - " + equipes[i]);
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

    // Encontrar os dois pilotos da equipe escolhida
    let pilotosDaEquipe = [];

    for (let i = 0; i < pilotos.length; i++) {

        if (pilotos[i].equipe === equipeEscolhida) {
            pilotosDaEquipe.push(i);
        }
    }

    // Verificar se a equipe possui dois pilotos
    if (pilotosDaEquipe.length !== 2) {

        alert(
            "Erro: a equipe " + equipeEscolhida +
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

    // Encontrar a posição do piloto que sairá
    let indiceSubstituido = pilotosDaEquipe[escolhaPiloto - 1];

    let pilotoSubstituido = pilotos[indiceSubstituido];

    // Colocar o jogador na equipe escolhida
    seuPiloto.equipe = equipeEscolhida;

    // Substituir o piloto no grid
    pilotos[indiceSubstituido] = seuPiloto;

    alert(
        "CONTRATAÇÃO CONFIRMADA!\n\n" +
        seuPiloto.nome + " entrou na equipe " +
        equipeEscolhida + ".\n\n" +
        pilotoSubstituido.nome +
        " foi substituído."
    );

    return true;
}


alert("Seu piloto foi criado com sucesso! \nNome: " + seuPiloto.nome + "\nIdade: " + seuPiloto.idade + "\nEquipe: " + seuPiloto.equipe + "\nNacionalidade: " + seuPiloto.nacionalidade + "\nExperiência: " + seuPiloto.experiencia + "\nHabilidade: " + seuPiloto.habilidade + "\nVisão: " + seuPiloto.visao + "\nRitmo: " + seuPiloto.ritmo + "\nTotal: " + seuPiloto.total)

git config --global user.name "luizrenatodarosamarchand-maker"
$ git config --global user.email luizrenatodarosamarchand@gmail.com