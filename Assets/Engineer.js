const Member = require('./Member');

class Engineer extends Member {
    constructor(github){
        this.github = github;
    }
}

module.exports = Engineer;