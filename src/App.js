import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
// auth
import { AuthProvider } from './Context/Auth';
import PrivateRoute from './Components/PrivateRoute';
// pages
import Login from './pages/sign/Login/Login';
import Signup from './pages/sign/SignUp/Signup';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import ForgotPass from './pages/sign/ForgotPass';



function App() {
  return (
      <div className="app">
        <Router>
          <AuthProvider>
            <Routes>
            <Route exact path='/login' element={<Login />} /> 
            <Route exact path='/signup' element={<Signup />} /> 
            <Route exact path='/reset' element={<ForgotPass />} /> 
            <Route element={<PrivateRoute />}>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/create' element={<CreatePage />} />
            </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
