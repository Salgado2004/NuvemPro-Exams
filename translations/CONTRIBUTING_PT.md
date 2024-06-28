# Contribuindo
> O jeito mais fácil de contribuir é [criando uma issue](https://github.com/Salgado2004/CertCloud-Exams/issues/new/choose). Nenhuma contribuição é pequena demais - Incentivamos você a reportar erros ou bugs, questões incorretas, solicitar melhorias, etc.

- [Configurando o projeto](#configurando-o-projeto)
  - [Configuração local](#configuração-local)
- [Mudanças de conteúdo](#mudanças-de-conteúdo)
  - [Adicionando uma nova questão](#adicionando-uma-nova-questão)
    - [Questão de única alternativa](#questão-de-única-alternativa)
    - [Questão de múltipla escolha](#questão-de-múltipla-escolha)
    - [Questão de verdadeiro ou falso](#questão-de-verdadeiro-ou-falso)
    - [Questão de caixa de seleção](#questão-de-caixa-de-seleção)

## Configurando o projeto

### Configuração local

- Faça um [fork](https://github.com/Salgado2004/CertCloud-Exams/fork) do repositório
- Instale as dependências do projeto `npm install`
- Instale o angular cli `npm install -g @angular/cli`
- Na raiz do projeto, execute o comando `ng serve --open` para rodar a aplicação
- Para o servidor de desenvolvimento, execute o comando `node .\dev-server\index.js`

## Mudanças de conteúdo

### Adicionando uma nova questão

As questões ficam armazenadas nesse repositório, na pasta [content/](https://github.com/Salgado2004/CertCloud-Exams/tree/master/content), no formato JSON.

Cada exame tem seu próprio arquivo questions.json. Para adicionar uma nova questão, vá até o arquivo do exame e crie um novo objeto JSON no final do array, respeitando o formato a seguir:

O _único atributo que pode ser **null** é o 'body'_. Todos os outros devem ser informados.

#### Questão de única alternativa
```
{
    "id": "001",
    "exam": "AZ900",
    "type": "options",
    "domain":"Descrever os conceitos da nuvem",
    "header": "Qual é a vantagem da computação em nuvem em comparação com implantações locais?",
    "options": [
      "Você pode dimensionar mais rapidamente",
      "Você pode trabalhar em várias estações de trabalho",
      "Você tem acesso total em caso de interrupção da internet",
      "Você tem suas CPUs"
    ],
    "correct": [
      "Você pode dimensionar mais rapidamente"
    ]
  }
```

#### Questão de múltipla escolha
```
{
    "id": "003",
    "exam": "IA900",
    "type": "multiple",
    "domain": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "header": "Quais são os dois modelos de domínio especializados que dão suporte à Visão de IA do Azure ao categorizar uma imagem? Cada resposta correta apresenta uma solução completa.",
    "options": [
      "Celebridades",
      "Tipos de imagem",
      "Pontos de referência",
      "People",
      "People_group"
    ],
    "correct": [
      "Celebridades",
      "Pontos de referência"
    ]
  }
```

#### Questão de verdadeiro ou falso
```
 {
    "id": "063",
    "exam": "IA900",
    "type": "truefalse",
    "domain": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "header": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "body": "NOTA: Cada seleção correta vale um ponto.",
    "options": [
      "A previsão dos preços da habitação com base em dados históricos é um exemplo de detecção de anomalia",
      "Identificar logins suspeitos procurando desvios dos padrões usuais é um exemplo de detecção de anomalias.",
      "Prever se um paciente desenvolverá diabetes com base no histórico médico do paciente é um exemplo de detecção de anomalias"
    ],
    "correct": [
      "false",
      "true",
      "false"
    ]
  }
```

#### Questão de caixa de seleção
```
{
    "id": "013",
    "exam": "IA900",
    "type": "select",
    "domain": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "header": "Selecione a resposta que conclui corretamente a frase.",
    "body": "___________ pode retornar respostas, como linguagem natural, imagens ou código, com base na entrada de linguagem natural.",
    "options": [
      "Pesquisa visual computacional",
      "Aprendizado",
      "IA generativa",
      "Aprendizado de máquina",
      "Aprendizado de reforço"
    ],
    "correct": [
      "IA generativa"
    ]
  }
```
