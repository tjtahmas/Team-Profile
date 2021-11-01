const Team = require('./Team');

class Manager extends Team {
    constructor(officeNum){
        this.officeNum = officeNum;
    }
}