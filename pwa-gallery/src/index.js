import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  </header>
)*/
 
ReactDOM.render((<BrowserRouter> 
					<App /> 
				</BrowserRouter>
				), document.getElementById('root'));
registerServiceWorker();
