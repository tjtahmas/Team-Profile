const Team = require('./Team');

class Engineer extends Team {
    constructor(github){
        this.github = github;
    }
}