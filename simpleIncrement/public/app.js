import React from 'react';
import {render} from 'react-dom';
import{Provider} from 'react-redux';
import Counter from './js/counter';
import store from './js/store';

const app = document.getElementById('app');

render(
    <div>
        <Provider store = {store}>
            <Counter />
        </Provider>
    </div>
,app);