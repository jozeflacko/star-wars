import * as React from 'react';
import './Header.css';
import logo from '../../assets/starWars.png';

export default class Header extends React.Component<{},{}> {

    constructor(props:{}) {
        super(props);
    }

    public render() {
        return (
            <div className="header-component">
               <img src={logo} className="logo" alt="logo" />
            </div>
        );
    }

}