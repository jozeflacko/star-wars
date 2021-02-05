import StarWarsService from './StarWarsService';

export default class Services {
    
    public static getStartWarsService() {
        if(! this.starWarsService) {
            this.starWarsService = new StarWarsService();    
        }                
        return this.starWarsService;
    }

    private static starWarsService: StarWarsService;

    private constructor() {
        // can not instantiate
    }

}