// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { promises as fs } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
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
        message: 'Please select all sections that you want to include in your README Table of Contents:',
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
        message: 'Please choose your GitHub License:',
        name: 'license',
        type: 'list',
        choices: [
            'MIT',
            'GPLv3',
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

// this function is called with the questions array (displays each question)

// inquirer.prompt(questions) displays the quesions to the user and collects their responses.
// Once all the questions are answered, responses are stored in an answers object.
// .then() handles the result of a promise. in this case, we're using a callback function that RECEIVES the answers object.
// inquirer.prompt(questions).then(answers => {
//     console.log(answers);
// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownContent = generateMarkdown(data);
    // writeFile writes the DATA to the file.
    fs.writeFile(fileName, markdownContent);
    console.log('README successfully generated!');
    // TODO await? 
}
    

// TODO: Create a function to initialize app
async function init() {
    const menuPrompt = await inquirer.prompt({
        message: 'Welcome to the markdown generator. Do you want to generate a README file?',
        name: 'menuReply',
        type: 'list',
        choices: ['yes', 'no'],
    });

    if (menuPrompt.menuReply === 'yes') {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', answers, markdown);
    } else{
        console.log('You have exited the markdown generator.')
    };
}


// Function call to initialize app
init();

export default init;

