const Member = require('./Member');

class Manager extends Member {
    constructor(officeNum){
        this.officeNum = officeNum;
    }
}

module.exports = Manager;