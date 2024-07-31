const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

async function main() {
    try {
        //initializes variables
        const examsFilePath = path.join("content", 'exams.json');
        const examsJson = JSON.parse(fs.readFileSync(examsFilePath, 'utf8'));
        let exams = examsJson.map(exam => exam.name);

        const { exam, type } = await inquirer.prompt([
            {
                name: 'exam',
                message: 'What is the exam the question will be part of?',
                type: 'list',
                choices: exams,
            },
            {
                name: 'type',
                message: 'What is the type of the question?',
                type: 'list',
                choices: ['options', 'multiple', 'truefalse', 'select', 'dragdrop'],
            }
        ]);

        const availableDomains = examsJson.find(e => e.name === exam).domains.map(domain => domain.name);

        const { domain, hasRequirements, codeBlock, hasBody } = await inquirer.prompt([
            {
                name: 'domain',
                message: 'What is the domain of the question?',
                type: 'list',
                choices: availableDomains,
            },
            {
                name: 'hasRequirements',
                message: 'Will the question feature requirements?',
                type: 'confirm',
            },
            {
                name: 'codeBlock',
                message: 'Will the question feature a code block?',
                type: 'confirm',
            },
            {
                name: 'hasBody',
                message: 'Will the question feature a body?',
                type: 'confirm',
            },
        ]);

        // Read existing questions.json (if it exists)
        const questionsFilePath = path.join("content", exam, 'questions.json');
        const existingQuestions = fs.existsSync(questionsFilePath)
            ? JSON.parse(fs.readFileSync(questionsFilePath, 'utf8'))
            : [];

        // Generate a new question ID
        const questionId = `${(existingQuestions.length + 1).toString().padStart(3, '0')}`;

        // Create the JSON template
        const questionTemplate = {
            id: `${questionId}`,
            exam,
            type,
            domain: domain,
            header: '',
            options: [],
            correct: [],
        };

        // Include optional fields
        if(hasBody) {
            questionTemplate.body = '';
        }

        if(hasRequirements) {
            questionTemplate.requirements = [];
        }

        if(codeBlock){
            questionTemplate.code = `question-${questionId}.md`;
        }

        // Append to existing questions
        existingQuestions.push(questionTemplate);

        // Save updated questions.json
        fs.writeFileSync(questionsFilePath, JSON.stringify(existingQuestions, null, 2));

        // Update the exams.json file with the new question
        const examIndex = examsJson.findIndex(e => e.name === exam);
        examsJson[examIndex].questions = existingQuestions.length;
        fs.writeFileSync(examsFilePath, JSON.stringify(examsJson, null, 2));

        // Create a new Markdown file for code block questions
        if (codeBlock) {
            const codeFilePath = path.join("content", exam, 'code', `question-${questionId}.md`);
            if ( !fs.existsSync(path.join("content", exam, 'code')) ) {
                fs.mkdirSync(path.join("content", exam, 'code'));
            }
            fs.writeFileSync(codeFilePath, '<!-- Write the codeblock here -->'); // Blank content for now
            console.log(`Code file created: ${codeFilePath}`);
        }

        console.log('Question template created successfully!');
        console.log(`\nGo to content/${exam}/questions.json to add more details to the question.\n`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
