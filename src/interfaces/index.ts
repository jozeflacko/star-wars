export interface IStarWarsService {
    getAllPeople(page: number, success: any): void;
    findPersonById(id: string, success: (person: IPerson) => void): void;
}

export interface IPerson {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeword: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface IPeopleResult {
    count: number;
    next: string;
    previous: string;
    results: IPerson[];
}