const { describe, it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Construct', () => {
        it('should create an intern given the proper inputs', () => {
            const Ben = new Intern('Ben', 248, 'ben@gmail.com', 'Purdue University');

            if (Ben.name === 'Ben' && Ben.ID === 248 && Ben.email === 'ben@gmail.com' && Ben.school === 'Purdue University'){
                result = true;
            } else {
                result = false;
            };

            expect(result).toEqual(true);
        });
    });

    describe('ProperGets', () => {
        it('should return proper values for get methods', () => {
            const Ben = new Intern('Ben', 248, 'ben@gmail.com', 'Purdue University');

            const school = Ben.getSchool();
            const role = Ben.getRole();

            if (school === 'Purdue University' && role === 'Intern') {
                result = true;
            } else {
                result = false;
            };

            expect(result).toEqual(true);
        });
    });
});