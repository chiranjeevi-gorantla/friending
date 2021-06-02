import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {members} from './members';

ReactDOM.render(
               <CardList members={members} />
    , document.getElementById('root')
);


reportWebVitals();
