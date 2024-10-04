// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { promises as fs } from 'fs';

// TODO: Create an array of questions for user input
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


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    const markdownContent = `
    # Contact Information
    
    - **Full Name:** ${questions.fullName}
    - **Phone Number:** ${questions.phoneNumber}
    - **Address:** ${questions.address}
    - **Favorite Food Category:** ${questions.foodCategory}
    `;}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


export default createMarkdownFile;

