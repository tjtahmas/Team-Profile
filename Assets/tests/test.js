//const Member = require('../Assets/Member');
const Engineer = require('../Engineer');
const Manager = require('../Manager');
const Intern = require('../Intern');
//const Team = require('../Assets/Team');

describe('writeHTMLs', () => {
    describe('manager', () => {
        it('should write a proper HTML output for a manager-type member', () => {
        const str = `<div class="col-md-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Fred</h5>
                  <br/>
                  <p>ID: 5</p>
                  <a href="mailto: fred@gmail.com">fred@gmail.com</a>
                  <br/><br/>
                  <p> Office Number: N123</p>
                </div>
              </div>
        `
        const result = new Manager('Fred','5','fred@gmail.com','N123');

        expect(result).toEqual(str)
        });
    });

    describe('engineer', () => {
        it('should write a proper HTML output for an engineer-type member', () => {
        const str = `
        <div class="col-md-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Fred</h5>
                    <br />
                    <p>ID: 5</p>
                    <a href="mailto: fred@gmail.com">fred@gmail.com</a>
                    <br /><br />
                    <a href="https://github.com/fred" target="_blank"> github.com/${this.github}</a>
                </div>
            </div>
        `
        const result = new Engineer('Fred','5','fred@gmail.com','fred');

        expect(result).toEqual(str)
        });
    });
    describe('intern', () => {
        it('should write a proper HTML output for an intern-type member', () => {
        const str = `
        <div class="col-md-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Fred</h5>
                    <br />
                    <p>ID: 5</p>
                    <a href="mailto: fred@gmail.com">fred@gmail.com</a>
                    <br /><br />
                    <p> School: The Ohio State University</p>
                </div>
            </div>
        `
        const result = new Intern('Fred','5','fred@gmail.com','The Ohio State University');

        expect(result).toEqual(str)
        });
    });
});