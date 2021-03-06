const Member = require('./Employee');

class Engineer extends Member {
    constructor(name, ID, email, github){
        super(name, ID, email);
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer'
    }
    writeEngHTML(engString){
        engString = engString.concat(`
        <div class="col-md-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <br />
                    <p>ID: ${this.ID}</p>
                    <a href="mailto: ${this.email}">${this.email}</a>
                    <br /><br />
                    <a href="https://github.com/${this.github}" target="_blank"> github.com/${this.github}</a>
                </div>
            </div>
        `);
        return engString;
    }
}

module.exports = Engineer;