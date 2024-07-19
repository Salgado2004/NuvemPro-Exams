# Contribuindo
> O jeito mais fácil de contribuir é [criando uma issue](https://github.com/Salgado2004/NuvemPro-Exams/issues/new/choose). Nenhuma contribuição é pequena demais - Incentivamos você a reportar erros ou bugs, questões incorretas, solicitar melhorias, etc.

- [Configurando o projeto](#configurando-o-projeto)
  - [Configuração local](#configuração-local)
- [Mudanças de conteúdo](#mudanças-de-conteúdo)
  - [Adicionando uma nova questão](#adicionando-uma-nova-questão)

## Configurando o projeto

### Configuração local

- Faça um [fork](https://github.com/Salgado2004/NuvemPro-Exams/fork) do repositório
- Instale as dependências do projeto `npm install`
- Instale o angular cli `npm install -g @angular/cli`
- Na raiz do projeto, execute o comando `ng serve --open` para rodar a aplicação
- Para o servidor de desenvolvimento, execute o comando `node .\dev-server\index.js`

## Mudanças de conteúdo

### Adicionando uma nova questão

As questões ficam armazenadas nesse repositório, na pasta [content/](https://github.com/Salgado2004/NuvemPro-Exams/tree/master/content), no formato JSON.

Para adicionar uma nova questão, execute o script `node .\dev-server\new-question.js ` na raiz do projeto.

Ele irá criar um template de pergunta no caminho correto, conforme a seguir: 
```
{
  "id": "006",
  "exam": "AZ900",
  "type": "options",
  "domain": "",
  "header": "",
  "options": [],
  "correct": [],
  "body": ""
}
```
Preencha os dados da questão e abra seu pull request
> **Atenção**: Por favor, evite copiar perguntas de outras plataformas, tente criar suas próprias questões