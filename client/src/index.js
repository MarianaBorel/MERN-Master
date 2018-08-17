// Import Modules.
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Import Components.
import App from './components/App/App';

// Import Styling.
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
