import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Portifolio from './pages/Portifolio';
import Quemsomos from './pages/Quemsomos';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portifolio"  component={Portifolio} />
                <Route path="/quemsomos"  component={Quemsomos} />
            </Switch>
        </BrowserRouter>



    );
}