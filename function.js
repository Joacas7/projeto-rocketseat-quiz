/* const mensagem = "Bom te ver aqui! ";
alert(mensagem + (10 * 100) + " abraços");
 */


/* todas as perguntas e alternativas */
const perguntas = [
    {
        pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
        respostas:[
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
        respostas:[
            "push()",
            "append()",
            "addToEnd()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas:[
            "Compara apenas o valor de dois valores.",
            "Compara o valor e o tipo de dois valores.",
            "Realiza uma operação de atribuição."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método usado para converter uma string em minúsculas em JavaScript?",
        respostas:[
            "toLowerCase()",
            "toUpperCase()",
            "convertToLower()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de comentar múltiplas linhas de código em JavaScript?",
        respostas:[
            "// Comentário",
            "/* Comentário */",
            "--Comentário--"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas opções é uma maneira de selecionar um elemento HTML pelo seu ID em JavaScript?",
        respostas:[
            "document.getElementByName()",
            "document.querySelectorAll()",
            "document.getElementById()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas:[
            "pop()",
            "remove()",
            "delete()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas:[
            "Adiciona um ouvinte de evento a um elemento HTML.",
            "Remove um ouvinte de evento de um elemento HTML.",
            "Atualiza um ouvinte de evento em um elemento HTML."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador usado para comparar se dois valores são diferentes em JavaScript?",
        respostas:[
            "!=",
            "!==",
            "=="
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
        respostas:[
            "6",
            "'33'",
            "33"
        ],
        correta: 1
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