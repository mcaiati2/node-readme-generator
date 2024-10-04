// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


import inquirer from 'inquirer';
import { promises as fs } from 'fs';


async function createMarkdownFile() {
    const answers = await inquirer.prompt([

        {
            message: 'what is your full name?',
            name: 'fullName',
            type: 'input',
        },
        {
            message: 'what is your phone number?',
            name: 'phoneNumber',
            type: 'input',
        },
        {
            message: 'what is your address?',
            name: 'address',
            type: 'input',
        },
        {
            message: 'what is your favorite food category?',
            name: 'foodCategory',
            type: 'list',
            choices: ['American', 'Chinese', 'Japanese', 'Italian'],
        },
    ]);

    const markdownContent = `
# Contact Information

- **Full Name:** ${answers.fullName}
- **Phone Number:** ${answers.phoneNumber}
- **Address:** ${answers.address}
- **Favorite Food Category:** ${answers.foodCategory}
`;

    await fs.writeFile('contact_info.md',markdownContent);
}

createMarkdownFile();

export default createMarkdownFile;

