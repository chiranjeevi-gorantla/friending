import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {members} from './members';

ReactDOM.render(
               <div>
                <Card id={members[0].id} name={members[0].name} email={members[0].email} />
                <Card id={members[1].id} name={members[1].name} email={members[1].email}/>
                <Card id={members[2].id} name={members[2].name} email={members[2].email}/>
               </div>
    , document.getElementById('root')
);


reportWebVitals();
