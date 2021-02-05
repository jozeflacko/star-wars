import * as React from 'react';
import './FaceComponent.css';

interface IProps {
    hair: string;
    eye: string;
    skin: string;
}
interface IState {
   isBad: boolean;
}
export default class FaceComponent extends React.Component<IProps,IState> {

    constructor(props:IProps) {
        super(props);
        this.state = {
            isBad: ((Math.floor(Math.random() * 2) + 0) > 0)
        }
    }

    public render() {

        const { skin, hair, eye } = this.props;
        
        const styleSkin = {
            background: (skin.split(','))[0],
        };
        const styleHair = {
            background: (hair.split(','))[0],
        };
        const styleEye = {
            background: (eye.split(','))[0],
        };
        const styleSword = {
            background: this.state.isBad ? 'red' : 'green',
        };

        return (
            <div className="face-component" style={styleSkin}>
                <div className="hair" style={styleHair} />
                <div className="eyes">
                    <span className="eye" style={styleEye} />
                    <span className="eye" style={styleEye} />
                </div>
               <div className="mouth"><span className="smile">{this.state.isBad ? '(' : ')'}</span></div>
               <div className="sword" style={styleSword} />
            </div>
        );
    }

}