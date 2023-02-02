import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// auth
import { AuthProvider } from "./Context/Auth";
import PrivateRoute from "./Components/PrivateRoute";
// pages
import Login from "./pages/sign/Login/Login";
import Signup from "./pages/sign/SignUp/Signup";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ForgotPass from "./pages/sign/ForgotPass";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/login"
              element={<Login title={"RadicalX | Log In"} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup title={"RadicalX | Sign Up"} />}
            />
            <Route
              exact
              path="/reset"
              element={<ForgotPass title={"RadicalX | Password Reset"} />}
            />
            <Route element={<PrivateRoute />}>
              <Route
                exact
                path="/"
                element={<HomePage title={"RadicalX | Home page"} />}
              />
              <Route
                exact
                path="/create"
                element={<CreatePage title={"RadicalX | Apprenticeship"} />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
