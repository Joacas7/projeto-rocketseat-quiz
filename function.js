/* const mensagem = "Bom te ver aqui! ";
alert(mensagem + (10 * 100) + " abraços");
 */


/* todas as perguntas e alternativas */
const perguntas = [
    {
        pergunta: "Qual é a palavra-chave utilizada para declarar uma função em JavaScript?",
        respostas:[
            "function",
            "def",
            "fn"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas:[
            "removeLast()",
            "pop()",
            "deleteLast()"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas:[
            "Remove um evento de um elemento",
            "Adiciona um evento a um elemento",
            "Atualiza um elemento na página"
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é usado para verificar se dois valores são iguais, mas não necessariamente do mesmo tipo, em JavaScript?",
        respostas:[
            "==",
            "===",
            "!="
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
        respostas:[
            "round()",
            "ceil()",
            "floor()"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma expressão regular em JavaScript?",
        respostas:[
            "Um tipo de dado primitivo",
            "Uma estrutura de controle de fluxo",
            "Um padrão de busca de texto"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão 'typeof null' em JavaScript?",
        respostas:[
            "'null'",
            "'object'",
            "'undefined'"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para concatenar dois ou mais arrays em JavaScript?",
        respostas:[
            "concat()",
            "combine()",
            "merge()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'new' em JavaScript?",
        respostas:[
            "Criar uma nova variável",
            "Instanciar um novo objeto",
            "Definir um novo escopo"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para transformar um array em uma string em JavaScript?",
        respostas:[
            "toString()",
            "join()",
            "concat()"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'splice()' faz em JavaScript?",
        respostas:[
            "Remove elementos de um array e/ou adiciona novos elementos",
            "Ordena os elementos de um array",
            "Inverte a ordem dos elementos de um array"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a palavra-chave utilizada para declarar uma função em JavaScript?",
        respostas:[
            "function",
            "def",
            "funct"
        ],
        correta: 0
    },
    {
        pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
        respostas:[
            "typeof",
            "type",
            "instanceof"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
        respostas:[
            "toLowerCase()",
            "toLower()",
            "lowerCase()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'push()' faz em um array em JavaScript?",
        respostas:[
            "Remove o último elemento",
            "Adiciona um elemento no início",
            "Adiciona um elemento no final"
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para atribuição de valor em JavaScript?",
        respostas:[
            "=",
            "==",
            "==="
        ],
        correta: 0
    },
    {
        pergunta: "Como você faz um loop 'for' em JavaScript?",
        respostas:[
            "for (var i = 0; i < length; i++)",
            "loop (var i = 0; i < length; i++)",
            "foreach (var i = 0; i < length; i++)"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas:[
            "pop()",
            "removeLast()",
            "deleteLast()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas:[
            "Adiciona uma classe a um elemento HTML",
            "Registra um manipulador de eventos em um elemento HTML",
            "Remove um evento de um elemento HTML"
        ],
        correta: 1
    },
    {
        pergunta: "Como você declara uma constante em JavaScript?",
        respostas:[
            "var",
            "const",
            "let"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
        respostas:[
            "||",
            "&&",
            "!"
        ],
        correta: 0
    }

];


/* transforma o html visivel atraves do JavaScript sem precisar escrever todo o html */
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

/* loop ou laço de repetição */
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;

    /* adiciona as alternativas do quiz */
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        dt.querySelector("span").textContent = resposta
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        dt.querySelector("input").value = item.respostas.indexOf(resposta)
        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
        }
        
        
        quizItem.querySelector("dl").appendChild(dt);
    }
 
    /* remove a Alternativa A */
    quizItem.querySelector("dl dt").remove()

    /* coloca a pergunta na tela */
    quiz.appendChild(quizItem);
}