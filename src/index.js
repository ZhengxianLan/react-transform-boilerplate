import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
 injectTapEventPlugin();
 
import App from './App';
import './style/main.scss';


render(<App />,document.getElementById('root'));

