const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require('fs');

//Get writeFile to work properly
//Create Video Tutorial

class Team {
    // might have to add constructor items to hold HTML for each employee type
    // then merge the strings together when the user quits to create the HTML file
    constructor() {
        this.teamString = '';
        this.manString = '';
        this.engString = '';
        this.intString = '';
    }
    buildTeam() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'Input name of Team Manager:'
                },
                {
                    type: 'input',
                    name: 'managerID',
                    message: 'Input ID of Team Manager:'
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Input email address of Team Manager:'
                },
                {
                    type: 'input',
                    name: 'managerOffice',
                    message: 'Input office number of Team Manager:'
                },
                {
                    type: 'confirm',
                    name: 'continue',
                    message: 'Would you like to include another team member?'
                }
            ])
            .then(val => {
                let man = new Manager(val.managerName, val.managerID, val.managerEmail, val.managerOffice)
                this.manString = man.writeManHTML(this.manString);
                if (val.continue) {
                    this.newMember();
                } else {
                    this.quit();
                }
            });
    }

    newMember() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'memberType',
                    message: 'What type of team member would you like to add?',
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then(val => {
                console.log(val);
                if (val.memberType == 'Engineer') {
                    this.buildEngineer();
                } else if (val.memberType == 'Intern') {
                    this.buildIntern();
                }
            })
    }

    buildEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'Input the name of the engineer:'
                },
                {
                    type: 'input',
                    name: 'engineerID',
                    message: 'Input the ID of the engineer:'
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Input the email address of the engineer:'
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: 'Input the Github username of the engineer:'
                },
                {
                    type: 'confirm',
                    name: 'continue',
                    message: 'Would you like to include another team member?'
                }
            ])
            .then(val => {
                let eng = new Engineer(val.engineerName, val.engineerID, val.engineerEmail, val.engineerGithub);
                this.engString = eng.writeEngHTML(this.engString);
                // create new Engineer
                // add and call an Engineer method that adds an engineer card to the HTML
                if (val.continue) {
                    this.newMember();
                } else {
                    this.quit();
                }
            });
    }

    buildIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'Input the name of the intern:'
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: 'Input the ID of the intern:'
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Input the email address of the intern:'
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'Input the school of the intern:'
                },
                {
                    type: 'confirm',
                    name: 'continue',
                    message: 'Would you like to include another team member?'
                }
            ])
            .then(val => {
                let int = new Intern(val.internName, val.internID, val.internEmail, val.internSchool);
                this.intString = int.writeIntHTML(this.intString);
                if (val.continue) {
                    this.newMember();
                } else {
                    this.quit();
                }
            });
    }

    generateHTML() {
        this.teamString = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Members</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <h1 class="navbar-brand" >Team Members:</h1>
</div>
</nav>
    <div class='container'>
        <div class='row'>
            <h1>Team Manager</h1>
            ${this.manString}
        </div>
    </div>
    <div class='container'>
        <h1>Engineer(s)</h1>
        <div class='row'>
            ${this.engString}
        </div>
    </div>
    <div class='container'>
        <div class='row'>
            <h1>Intern(s)</h1>
            ${this.intString}
        </div>
    </div>
</body>
</html>
`
fs.writeFileSync('./teamSite.html', this.teamString, 'utf-8', function () {
    console.log('file successfully wrote!')
});
//return this.teamString
    }

    //Fix writeFile function
    quit() {
        this.generateHTML();
        console.log('\nGoodbye!');
        process.exit(0);
    }
}

module.exports = Team;