> See also: [Portuguese 🇧🇷](/translations/CONTRIBUTING_PT.md)

# Contribuiting
> The easiest way to contribute is by [opening an issue](https://github.com/Salgado2004/NuvemPro-Exams/issues/new/choose). No contribution is too small - we encourage you to report any typos/bugs, unclear questions or feature requests.

- [Setting up the project](#setting-up-the-project)
  - [Codespace](#codespace)
  - [Local setup](#local-setup)
- [Content Changes](#content-changes)
  - [Adding new question](#adding-new-question)

## Setting up the project

### Codespace

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Salgado2004/NuvemPro-Exams?quickstart=1)

### Local setup

If you don't want to use the codespace, you can also set up the project locally:

- [Fork](https://github.com/Salgado2004/NuvemPro-Exams/fork) the repository
- Install the project dependencies `npm install`
- Install angular cli `npm install -g @angular/cli`
- In the project root, run the Angular project `ng serve --open`
- Also, run the development server `node .\dev-server\index.js`

## Content Changes

### Adding new question

The questions are stored in the [content/](https://github.com/Salgado2004/NuvemPro-Exams/tree/master/content) folder of the repo in JSON format.

To add a new question, run the script `node .\dev-server\new-question.js ` in the project root.

It will create a new question template in the right path for you, as following: 
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
Fill the question data and open your PR
> [!warning]
> Please avoid copying question from other platforms, try to create your own questions