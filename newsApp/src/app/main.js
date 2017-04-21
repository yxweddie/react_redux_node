
import React from 'react';
import {render} from 'react-dom';

import { Provider, connect } from 'react-redux';
import { Redux } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// import store
import appStore from "./store/store.js";
// import components
import AppIndex from "./components/appindex";

// import css
import 'normalize.css/normalize.css';

function mapStateToProps (state) {
    return {
        sideBarState: state.navBarReducer.sideBarState,
        contents: state.homeReducer.contents
    }
}

let App = connect(mapStateToProps)(AppIndex);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, appStore)

const app = document.getElementById('app');
render(
    <div>
        <Provider store = {appStore}>
             <Router history={history}>
                <Route path="/" component={App}>
                </Route>
            </Router>
        </Provider>
    </div>,
app);

