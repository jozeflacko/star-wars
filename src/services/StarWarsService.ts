import { 
    IStarWarsService, 
    IPerson, 
    IPeopleResult
} from '../interfaces';

import HttpRequestService from './HttpRequestService';

export default class StarWarsService extends HttpRequestService implements IStarWarsService {

    private static readonly ERROR_MSG = 'Ups. do you have internet connection?';
    private static readonly PEOPLE = 'people';

    public getAllPeople(page: number, success: (people:IPerson[])=> void): void {       
        
        this.get<IPeopleResult>(StarWarsService.PEOPLE, 'page='+page)
            .then((res: any) => {
                // you can adjust the response here 
                if(res && res.data && res.data.results) {
                    const peopleWidthoutId = res.data.results as IPerson[]; 
                    const peopleWithId = peopleWidthoutId.map((person: IPerson)=>{
                        this.addId(person);                   
                        return person;
                    });
                    
                    success(peopleWithId);
                } else {
                    throw new Error(StarWarsService.ERROR_MSG);
                }                
            });
    }

    // super class uses it
    public getPrefix() {
        return 'https://swapi.co/api/'; 
    }

    // super class uses it
    public getPostfix() {
        return '?format=json';
    }

    public findPersonById(id: string, success: (people: IPerson) => void): void {
        this.get<IPeopleResult>(StarWarsService.PEOPLE+'/'+id)
            .then((res: any) => {                       
                // you can adjust the response here 
                if(res && res.data && res.data) {
                    const person = res.data as IPerson;                    
                    this.addId(person);
                    success(person);
                } else {
                    throw new Error(StarWarsService.ERROR_MSG);
                }   
            })
            .catch((error: any)=>{
                console.error('Ups something went wrong. Do you have internet?', error);
            });
    }

    private addId(person: IPerson) {
        let id = person.url.replace(this.getPrefix()+'people/',''); // TODO, extract constant
            id = id.replace('/','');
        person.id = id;                 
    }
}