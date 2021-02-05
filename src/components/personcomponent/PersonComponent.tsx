import * as React from 'react';
import { IPerson } from 'src/interfaces';
import './PersonComponent.css';
import FaceComponent from '../facecomponent/FaceComponent';
import { Link } from 'react-router-dom';

interface IProps {
    person: IPerson;
    showDetail ?:boolean;
    hideDetailButton ?:boolean;
}
interface IState {
    showDetail: boolean;
}
class PersonComponent extends React.Component<IProps, IState> {
    
    public readonly state:IState = {
        showDetail: this.props.showDetail,
    }
    
    public render() {        
        const person = this.props.person;        
        return (
            <div 
                className="person-component"
                onClick={this.installClickDetailHandler(person.name)}
            >
                <div className="left">
                    <FaceComponent 
                        hair={person.hair_color}
                        skin={person.skin_color}
                        eye={person.eye_color}
                    />
                </div>
                <div className="right">                
                    <div><h1>{person.name}</h1></div>
                    <div><h2><label>Birth year: </label><span>{person.birth_year}</span></h2></div>                    
                    <div className={this.state.showDetail ? 'detail active' : 'detail'}>
                        <div><label>Mass: </label><span>{person.mass}kg</span></div>
                        <div><label>Created: </label><span>{person.created}</span></div>
                        <div><label>Edited: </label><span>{person.edited}</span></div>
                        <div><label>Hair color: </label><span>{person.hair_color}</span></div>
                        <div><label>Skin color: </label><span>{person.skin_color}</span></div>
                        <div><label>Eye color: </label><span>{person.eye_color}</span></div>                      
                        <Link to={`/detail/${person.id}`} className={'button '+ ( this.props.hideDetailButton ? 'hidden' : '')}>Find more about {person.name}</Link>
                    </div>
                </div>
            </div>
        );
    }
    
    private installClickDetailHandler = (name: string) => () => {
       this.setState({
            ...this.state,
            showDetail: !this.state.showDetail // togle detail
        });
    }
}
export default PersonComponent;