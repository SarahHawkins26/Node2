const inquirer = require('inquirer');
const MarkDown = require('./lib/ReadmeGen')

const fs = require('fs');

// index questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does this project have test instructions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(value){
            return value.toLowerCase();
        }
    }

]

//run query function
function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadMe(answers)
        fs.writeFile('README.md', mark, function(err) {
        if(err) {
            console.log('Could not save file', err)
        } else {
            console.log('Success: new README.md file generated inside current folder')
        }
       })
    })
    .catch((error) => {
        console.log(error)
    })
}
runQuery();