import './App.css';
import {Router} from 'react-router-dom'
import Routes from './Routes';
import history from './history'
function App() {
  // localStorage.setItem('sign', false);
  return (
    <Router history={history}>
      <Routes/>
    </Router>
  )
}
export default App;

