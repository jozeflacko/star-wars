import * as React from 'react';
import { IPerson } from '../../interfaces';
import PersonComponent from '../personcomponent/PersonComponent';

interface IProps {
    persons: IPerson[]
}
class PersonsComponent extends React.Component<IProps, {}> {
    
    public render() {
        return (
            <div className="persons-component">
                {this.printAllPersons()}
            </div>
        );
    }

    private printAllPersons() {
        return this.props.persons.map((person: IPerson)=>{
            return (<PersonComponent person={person} key={person.id}/>);
        });
    }
}
export default PersonsComponent;