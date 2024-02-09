const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objetos para interagir com documentos HTML",
        "Um tipo de variável em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "<!-- Comentário -->",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação de valor e tipo",
        "Concatenação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite executar um bloco de código repetidamente?",
      respostas: [
        "If statement",
        "For loop",
        "Switch case",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma biblioteca de gráficos",
        "Uma linguagem de programação",
        "Um formato de dados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar um elemento pelo seu ID",
        "Selecionar elementos por uma classe",
        "Selecionar um elemento pelo seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "A elevação de variáveis e funções durante a fase de compilação",
        "Um operador de comparação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não podem ser reatribuídas, enquanto 'const' é usado para variáveis que podem ser reatribuídas",
        "'const' é usado para variáveis que não podem ser reatribuídas, enquanto 'let' é usado para variáveis que podem ser reatribuídas",
        "Não há diferença, ambos são usados de forma intercambiável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar estilos a um elemento HTML",
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Adicionar uma nova propriedade a um objeto",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span") // associa à variavel ao acesso de acentos na parte de span
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) // true para clonar todos os filhos dentro de template
    quizItem.querySelector("h3").textContent = item.pergunta //
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true) // para clonar o que há dentro do quizItem e consequentemente dl à dt
      dt.querySelector("span").textContent = resposta // para mudar o conteudo dentro do span e substituir pela resposta
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item)) // para a seleção de respostas entender uma opção por pergunta //indexOf: pesquisa o item
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //true ou false
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
  
    //MUDANÇA DO INPUT
  
    
      quizItem.querySelector("dl").appendChild(dt) // para aparecer as opções de resposta
    }
  
  
  
  quizItem.querySelector("dl dt").remove() // para remover a palavra "Resposta A" que poderia aparecer no programa
  
  
  
  
    quiz.appendChild(quizItem) // para colocar a pergunta na tela
  }