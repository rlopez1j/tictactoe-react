import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/theme';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>
    , document.getElementById('root'));
