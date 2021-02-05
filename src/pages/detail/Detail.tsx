import * as React from 'react';
import { Link } from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import './Datail.css';
import PersonComponent from '../../components/personcomponent/PersonComponent';
import { IPerson } from '../../interfaces';
import Services from '../../services';
import logo from '../../assets/ship.png';

interface IParams {
    id: string;
}
interface IProps extends RouteComponentProps<IParams> {
    
}
interface IState {
    id: string;
    person: IPerson;
}
class Detail extends React.Component<IProps, IState> {
    
    public readonly state: IState = {
        person: null,
        id: this.props.match.params.id,
    }
    constructor(props: IProps) {
        super(props);
    }
    public componentDidMount() {
        this.fetchPerson(this.state.id);
    }
    public render() {
        if(this.state.person === null) {
            return <div>Loading...</div>
        }
        return (
            <div className="datail-component">                
                <h1 className="main">{this.state.person.name} - Detail!</h1>
                <img src={logo} className="bg" alt="logo" />
                    <Link to={`/`} className="button">Back to overview </Link>
                <div>
                    <PersonComponent person={this.state.person} 
                        showDetail={true}
                        hideDetailButton={true}
                    />
                </div>
                
            </div>
            
        );
    }

    private fetchPerson(id: string): void {
        Services.getStartWarsService().findPersonById(id, (person: IPerson): void => {
            this.setState({
                ...this.state,
                person
            });
        });
    }
}

export default  Detail;