import StarWarsService from './StarWarsService';
import { IPerson } from '../interfaces';

describe("testing service", ()=> {
    
    const service = new StarWarsService();
    
    it("test constants", () => {        
        
        expect(service.getPrefix()).toBe("https://swapi.co/api/");    
        
        expect(service.getPostfix()).toBe("?format=json");
    });   

    it("test fetch Luke Skywalker", async () => {

        expect.assertions(1);  // need to specify when using async data.
        const result = await service.get<IPerson>("https://swapi.co/api/people/1/?format=json");

        expect((result.data as IPerson).name).toEqual("Luke Skywalker");
    });  
   
});

