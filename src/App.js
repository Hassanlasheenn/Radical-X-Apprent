import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import Login from './pages/sign/Login/Login';
import Signup from './pages/sign/SignUp/Signup';



function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
           <Route exact path='/login' element={<Login />} /> 
           <Route exact path='/signup' element={<Signup />} /> 
          </Routes>
        </Router>
      </div>
  );
}

export default App;
