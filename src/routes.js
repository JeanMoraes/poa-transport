import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Bus from './pages/Bus';
import Lotation from './pages/Lotation';
import Itinerary from './pages/Itinerary';
import Info from './pages/Info';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bus" component={Bus} />
                <Route exact path="/lotation" component={Lotation} />
                <Route exact path="/itenerary/:id" component={Itinerary} />
                <Route exact path="/info" component={Info} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
export default Routes;