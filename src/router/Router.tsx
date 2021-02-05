import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../pages/overview/Overview';
import Detail from '../pages/detail/Detail';


export default class Router extends React.Component<{},{}> {

    public render() {
        return (
            <div className="router-container">
                <Switch>
                    <Route exact path='/' component={Overview} />                   
                    <Route path='/detail/:id' component={Detail} />
                </Switch>
            </div>
        );
    }

}





