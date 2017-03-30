import React      from 'react';
import {render}   from 'react-dom';
import {Provider} from 'react-redux';
import store      from '../public/js/store';
// components
import SubscribeComponents from '../public/js/components/subscribeComponents';

// stores

const app = document.getElementById('app');



render(
    <div>
        <Provider store = {store}>
            <div>
                <SubscribeComponents />    
            </div>
        </Provider>
    </div>
,app);