const perguntas = [
    {
      pergunta: 'Qual é a forma correta de declarar uma variável em JavaScript?',
      respostas: [
        'var myVar = 1;',
        'variable myVar = 1;',
        'myVar = 1;'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é o resultado da expressão 5 + "5" em JavaScript?',
      respostas: [
        '10',
        '55',
        'Error'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é o método em JavaScript usado para remover o último elemento de um array e retorna o elemento removido?',
      respostas: [
        'pop()',
        'remove()',
        'delete()'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a forma correta de escrever um comentário de uma linha em JavaScript?',
      respostas: [
        '// Este é um comentário',
        '<!-- Este é um comentário -->',
        '/* Este é um comentário */'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a função do operador "===" em JavaScript?',
      respostas: [
        'Atribuição',
        'Comparação estrita',
        'Concatenação'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é o resultado da expressão Boolean(10 > 9) em JavaScript?',
      respostas: [
        'true',
        'false',
        'TypeError'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é o método em JavaScript usado para adicionar novos elementos no início de um array?',
      respostas: [
        'push()',
        'unshift()',
        'append()'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é a saída do código console.log(typeof null); em JavaScript?',
      respostas: [
        '"object"',
        '"null"',
        '"undefined"'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a função do operador "+" quando aplicado a strings em JavaScript?',
      respostas: [
        'Adição',
        'Concatenação',
        'Subtração'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é o resultado da expressão 10 / "2" em JavaScript?',
      respostas: [
        '5',
        'TypeError',
        '0'
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  // loop ou repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
  
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        corretas.delete(item)
        if(estaCorreta){
           corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      }
  
  
      quizItem.querySelector('dl').appendChild(dt);
    }
    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
  }