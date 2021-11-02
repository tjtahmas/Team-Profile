const Member = require('./Member');

class Intern extends Member {
    constructor(school){
        this.school = school;
    }
}

module.exports = Intern;