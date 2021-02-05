import Tools from './index';

describe('Testing Tools', () => {
    
    it('testing tolls class', () => {
    
        const tools = new Tools();

        test('concat 2 strings', ()=>{
            expect(tools.concatString("1","2")).toBe("12");
        });

    });

    // it is an alias of test!
    test('adds 1 + 2 to equal 3', () => {
        expect(1+2).toBe(3);
    });
});
