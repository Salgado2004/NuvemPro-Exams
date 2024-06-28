> See also: [Portuguese 🇧🇷](/translations/CONTRIBUTING_PT.md)

# Contribuiting
> The easiest way to contribute is by [opening an issue](https://github.com/Salgado2004/CertCloud-Exams/issues/new/choose). No contribution is too small - we encourage you to report any typos/bugs, unclear questions or feature requests.

- [Setting up the project](#setting-up-the-project)
  - [Local setup](#local-setup)
- [Content Changes](#content-changes)
  - [Adding new question](#adding-new-question)
    - [Single option question](#single-option-question)
    - [Multiple option question](#multiple-option-question)
    - [True or False question](#true-or-false-question)
    - [Select question](#select-question)

## Setting up the project

### Local setup

- [Fork](https://github.com/Salgado2004/CertCloud-Exams/fork) the repository
- Install the project dependencies `npm install`
- Install angular cli `npm install -g @angular/cli`
- In the project root, run the Angular project `ng serve --open`
- Also, run the development server `node .\dev-server\index.js`

## Content Changes

### Adding new question

The questions are stored in the [content/](https://github.com/Salgado2004/CertCloud-Exams/tree/master/content) folder of the repo in JSON format.

Each exam has its own questions.json file. To add a new question, go to the exam file and create a new JSON object in the end of the array, following the format:

The _only attribute that can be **null** is the body_. All of the others have to be informed.

#### Single option question
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

#### Multiple option question
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

#### True or False question
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

#### Select question
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
