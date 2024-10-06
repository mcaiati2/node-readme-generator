// DONE Include packages needed for this application
import inquirer from 'inquirer';
import { promises as fs } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// DONE Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        message: "Please provide a detailed description of your project, explaining the what, why, and how behind it's creation:",
        name: 'description',
    },
    {
        message: 'Please select all sections that you want to include in the Table of Contents section of your README:',
        name: 'tableOfContents',
        type: 'checkbox',
        choices: [
            'License',
            'Installation',
            'Usage',
            'Contributing',
            'Tests',
            'Questions',
        ]
    },
    {
        message: 'Would you like to use a GitHub license? If so, please select a license below. If you do not wish to use a license, please choose "None" below.',
        name: 'license',
        type: 'list',
        choices: [
            'MIT',
            'GPL-3-0',
            'Apache-2.0',
            'BSD-3-Clause',
            'None',
        ]
    },
    {
        message: 'What are the exact steps that need to be taken to get the deployment environment up and running? Please be sure to include detailed instructions:',
        name: 'howToInstall',
    },
    {
        message: 'Please provided details instructions for use. Screenshots should be used when relevant (placed in the assets/images folder): ',
        name: 'howToUse',
    },
    {
        message: 'Please provide a list of collaborators, third party assets, and tuorials used for the project:',
        name: 'projectCollaborators',
    },
    {
        message: 'What are the tests for your application? Provide examples on how to run the tests:',
        name: 'projectTests',
    },
    {
        message: 'Please provide contact information for where users can reach out if they have questions regarding the project:',
        name: 'projectQuestions',
    },
];

// DONE Create a function to write README file
function writeToFile(fileName, data) {
    const markdownContent = generateMarkdown(data);
    fs.writeFile(fileName, markdownContent);
    console.log('README successfully generated!');
}

// DONE Create a function to initialize app
async function init() {
    const menuPrompt = await inquirer.prompt({
        message: 'Welcome to the README generator. Do you want to generate a README file?',
        name: 'menuReply',
        type: 'list',
        choices: ['Yes', 'No'],
    });

    if (menuPrompt.menuReply === 'Yes') {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', answers, markdown);
    } else {
        console.log('You have exited the markdown generator.')
    };
}

// Function call to initialize app
init();

export default init;
