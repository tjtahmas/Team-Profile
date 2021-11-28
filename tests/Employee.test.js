const { describe, it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Construct', () => {
        it('should create an employee given the proper inputs', () => {
            const Ben = new Employee('Ben', 248, 'ben@gmail.com');

            if (Ben.name === 'Ben' && Ben.ID === 248 && Ben.email === 'ben@gmail.com'){
                result = true;
            } else {
                result = false;
            };

            expect(result).toEqual(true);
        });
    });

    describe('ProperGets', () => {
        it('should return proper values for get methods', () => {
            const Ben = new Employee('Ben', 248, 'ben@gmail.com');

            const name = Ben.getName();
            const ID = Ben.getId();
            const email = Ben.getEmail();
            const role = Ben.getRole();

            if (name === 'Ben' && ID === 248 && email === 'ben@gmail.com' && role === 'Employee'){
                result = true;
            } else {
                result = false;
            }

            expect(result).toEqual(true);
        });
    });
});