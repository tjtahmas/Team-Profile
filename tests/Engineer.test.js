const { describe, it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Construct', () => {
        it('should create an engineer given the proper inputs', () => {
           const Ben = new Engineer('Ben', 248, 'ben@gmail.com', 'ben123');
           
           if (Ben.name === 'Ben' && Ben.ID === 248 && Ben.email === 'ben@gmail.com' && Ben.github === 'ben123'){
               result = true;
           } else {
               result = false;
           };

           expect(result).toEqual(true);
        });
    });

    describe('ProperGets', () => {
        it('should return proper values for get methods', () => {
            const Ben = new Engineer('Ben', 248, 'ben@gmail.com', 'ben123');

            const github = Ben.getGithub();
            const role = Ben.getRole();

            if (github === 'ben123' && role === 'Engineer'){
                result = true;
            } else {
                result = false;
            };

            expect(result).toEqual(true);
        });
    });
});