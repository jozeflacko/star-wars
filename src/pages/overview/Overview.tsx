import * as React from 'react';
import Services from '../../services';
import { IPerson } from '../../interfaces';
import PersonsComponent from '../../components/personscomponent/PersonsComponent';
import './Overview.css';

interface IState {
    people: IPerson[];
    currentPage: number;
}


class Overview extends React.Component<{},IState> {
    
    public readonly state: IState;    

    private containerReference: any; 

    private heightOfContainer: number = -1;

    public constructor(props:{}) {
        super(props);
        this.state = {
            people: null,
            currentPage: 1
        };
        this.containerReference = React.createRef(); // will create reference
        this.loadNew = this.loadNew.bind(this);
    }

    public componentDidMount() {
        this.fetchPeople();
        window.addEventListener('scroll', this.handleScroll);
    }
    
    public componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    public componentDidUpdate() {
        const currentContainerReference = this.containerReference.current;
        this.heightOfContainer = currentContainerReference.offsetHeight;
        
        if(currentContainerReference) {
            console.log(this.heightOfContainer);
          
        }
    }
    
    public render() {
        if(this.state.people !== null) {
            return (
                <div className="overview-container" ref={this.containerReference}>
                    <h1 className="main">Star fighters - Overview!</h1>
                    
                    <div>
                        <PersonsComponent persons={this.state.people}/>
                    </div> 
                    <div onClick={this.loadNew} className="button">LoadNew</div>                       
                </div>   
          
            );
        }        
        return (
            <div className="overview-container">Loading...</div>
        );
    }  

    private fetchPeople(): void {
        Services.getStartWarsService().getAllPeople(this.state.currentPage, (people: IPerson[])=>{
            this.setState({
                ...this.state,
                people,
                currentPage: this.state.currentPage + 1
            });
        });
    }

    private handleScroll() {        
        console.log('heightContainer: ' + this.heightOfContainer + ', scrollPosition: ' + window.scrollY);        
        console.log(this.containerReference);        
    }

    private loadNew(){
        this.fetchPeople();
    }

}
export default Overview;