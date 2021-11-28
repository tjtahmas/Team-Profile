const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNum){    
        super(name, ID, email);
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.officeNum = officeNum;
    }
    getRole(){
      return 'Manager'
    }
    writeManHTML(manString){
        manString = manString.concat(`
        <div class="col-md-2 card" style="width: 18rem;">
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