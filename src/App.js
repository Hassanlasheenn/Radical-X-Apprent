import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import { AuthProvider } from './Context/Auth';
// pages import
import Login from './pages/sign/Login/Login';
import Signup from './pages/sign/SignUp/Signup';
import HomePage from './pages/HomePage';
import PrivateRoute from './Components/PrivateRoute';



function App() {
  return (
      <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
           <Route exact path='/login' element={<Login />} /> 
           <Route exact path='/signup' element={<Signup />} /> 
           <Route element={<PrivateRoute />}>
              <Route exact path='/' element={<HomePage />} />
           </Route>
          </Routes>
        </AuthProvider>
      </Router>
      </div>
  );
}

export default App;
