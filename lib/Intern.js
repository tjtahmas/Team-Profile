const Member = require('./Employee');

class Intern extends Member {
    constructor(name, ID, email, school){
        super(name, ID, email);
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern'
    }
    writeIntHTML(intString){
        intString = intString.concat(`
        <div class="col-md-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <br />
                    <p>ID: ${this.ID}</p>
                    <a href="mailto: ${this.email}">${this.email}</a>
                    <br /><br />
                    <p> School: ${this.school}</p>
                </div>
            </div>
        `);
        return intString;
    }
}

module.exports = Intern;