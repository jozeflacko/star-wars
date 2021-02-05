import * as React from 'react';
import Header from '../components/header/Header';
import './Main.css';
import Router from '../router/Router'

export default class Main extends React.Component {
  public render() {
    return (
      <div className="Main">
        <Header />        
        <div className="body">
            <Router />
        </div>
      </div>
    );
  }
}
