// HOMEWORK CODE. Has class notes in it as well.
const inquirer = require('inquirer');

const languages = [
  {
    id: 1,
    name: 'JS',
    // every item of data has a reference value you can use. typically unique numeric or string value.
  },
  {
    id: 2,
    name: 'Python',
  }
];

const softwareLicenses = []

// Prompt Method

const questionPromise = inquirer.prompt([
  {
  message:'Please type your name',
  name: 'userName',
  type: 'input',
  },
  
  {
    message: 'Please type your age.',
    name: 'userAge',
    type: 'input',
    // number input type is a little wonky, this works.
    validate: function(value) {
      if (isNaN(value)) {
        return 'You must type a number value'
      }

      return true;
      // if what they keep typing in a non number value, keep showing that message until they pass in a number value.
    }
  },
  {
    message: 'Please choose your favorite programming language',
    name: 'programmingLanguage',
    type:'list',
    choices: languages.map((languageObject) => {
      return {
        name: languageObject.name,
        // name is what you want the user to see
        value: languageObject.id,
        // value is what you get back in return
      }
      // USE THIS FOR MODULE 7 HOMEWORK.

    }),
  },
  {
    message: 'Please choose your software license',
    name: 'softwareLicense',
    type: 'list',
    choices: [
      {
        name: 'Academic Free License v3.0',
        value: 'AFL-3.0'
      },
      {
        name: 'BSD 3-clause "New" or "Revised" License',
        value: 'BSD-3-Clause',
      },
      {
        name: 'GNU General Public License v2.0',
        value: 'GPL-2.0',
      }

      // {
      //   name: 'Academic Free License v3.0',
      //   value: 'https://img.shields.io/badge/AFL-3.0-green.svg'
      // },
      // {
      //   name: 'BSD 3-clause "New" or "Revised" License',
      //   value: 'https://img.shields.io/badge/BSD-3-Clause-green.svg',
      // },
      // {
      //   name: 'GNU General Public License v2.0',
      //   value: 'https://img.shields.io/badge/GPL-2.0-Clause-green.svg',
      // }
      // this is an option where you can return a url.
    ]
  },
  {
    message: 'Please select your favorite food categories',
    name: 'foodCategory',
    type: 'checkbox',
    // press the spacebar to select an option, press A to toggle all
    choices: ['American', 'Chinese', 'Mexican', 'Korean', 'Italian'],
  }

]);

  // hey questionPromise, once you're done, then call this function
questionPromise.then((answerObj) => {
  console.log(answerObj);
  // this puts the function on hold and waits until the user hits enter. once all the prompts have been completed and answered, only then it will call your function. it passes you an answer object of all of their objects
});

