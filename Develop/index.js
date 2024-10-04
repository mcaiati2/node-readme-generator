// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { promises as fs } from 'fs';

// TODO: Create an array of questions for user input
 async function collectUserInput() {
        const questions = await inquirer.prompt([
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

return questions;
 }



// TODO: Create a function to write README file
async function writeToFile(fileName, answers) {
    const markdownContent = `
    # Contact Information
    
    - **Full Name:** ${answers.fullName}
    - **Phone Number:** ${answers.phoneNumber}
    - **Address:** ${answers.address}
    - **Favorite Food Category:** ${answers.foodCategory}
    `;

    await fs.writeFile(fileName, markdownContent);
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await collectUserInput();
    await writeToFile('contact_info.md', answers);
}

// Function call to initialize app
init();

export default init;

