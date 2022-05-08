import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/Registeration/Registeration";
import ResetPassword from "./components/Authentication/ResetPassword";
import ResetPasswordConfirm from "./components/Authentication/ResetPasswordConfirm";
import Activate from "./components/Authentication/Activate";
import Layout from "./hocs/Layout";


const App = () => {

  return (
    // <div>
    //   <Home />
    // </div>

    <Router>
      <div >
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset_password" element={<ResetPassword />} />
            <Route exact path="/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            <Route exact path="/activate/:uid/:token" element={<Activate />} />
          </Routes>
        </Layout>
      </div>
    </Router>

  );
}

export default App; 