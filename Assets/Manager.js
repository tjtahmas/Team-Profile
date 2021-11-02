const Member = require('./Member');

class Manager extends Member {
    constructor(name, ID, email, officeNum){
        super(name, ID, email);
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.officeNum = officeNum;
    }
    writeManHTML(manString){
        manString = manString.concat(`
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${this.name}</h5>
                  <br/>
                  <p>ID: ${this.ID}</p>
                  <a href="mailto: ${this.email}">${this.email}</a>
                  <br/><br/>
                  <p> Office Number: ${this.officeNum}</p>
                </div>
              </div>
        `)
    return manString;
    }
}

module.exports = Manager;