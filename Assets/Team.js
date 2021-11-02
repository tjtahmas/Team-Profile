const inquirer = require('inquirer');

class Team {
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
                console.log(val);
                if (val.continue){
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
                    choices: ['Engineer','Intern']
                }
            ])
            .then(val => {
                console.log(val);
                if (val.memberType == 'Engineer'){
                    this.buildEngineer();
                } else if (val.memberType == 'Intern'){
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
                    type: 'choice',
                    name: 'continue',
                    message: 'Would you like to include another team member?'
                }
            ])
            .then(val => {
                console.log(val);
                if (val.continue){
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
                    name: 'internGithub',
                    message: 'Input the school of the intern:'
                },
                {
                    type: 'choice',
                    name: 'continue',
                    message: 'Would you like to include another team member?'
                }
            ])
            .then(val => {
                console.log(val);
                if (val.continue){
                    this.newMember();
                } else {
                    this.quit();
                }
            });
    }

    quit() {
        console.log('\nGoodbye!');
        process.exit(0);
    }
}

module.exports = Team;