import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Clients from './pages/Clients';
import NewClient from './pages/NewClient';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/clients" exact component={Clients} />
                <Route path="/clients/new" exact component={NewClient} />
            </Switch>
        </BrowserRouter>
    );
}