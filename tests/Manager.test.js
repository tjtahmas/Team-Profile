const { describe, it, expect } = require("@jest/globals");
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Construct', () => {
        it('should create a Manager given the proper inputs', () => {
            const Ben = new Manager('Ben', 248, 'ben@gmail.com', 'N245');

            if (Ben.name === 'Ben' && Ben.ID === 248 && Ben.email === 'ben@gmail.com' && Ben.officeNum === 'N245'){
                result = true;
            } else {
                result = false;
            };

            expect(result).toEqual(true)
        });
    });

    describe('ProperGets', () => {
        it('should return proper values for get methods', () => {
            const Ben = new Manager('Ben', 248, 'ben@gmail.com');

            const role = Ben.getRole();

            if (role === 'Manager'){
                result = true;
            } else {
                result = false;
            };

            expect(result).toEqual(true);
        });
    });
});