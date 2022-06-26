import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/Registeration/Registeration";
import ResetPassword from "./components/Authentication/ResetPassword";
import ResetPasswordConfirm from "./components/Authentication/ResetPasswordConfirm";
import Activate from "./components/Authentication/Activate";
import Layout from "./hocs/Layout";
import Contact from "./components/ContactUs/Contact";
import About from "./components/AboutUs/About";
import BookingPage from "./components/BookingPage/BookingPage";
import BookingInfo from "./components/BookingPage/OldBookingInfo";
import BookingDecisionPage from "./components/BookingPage/BookingDecisionPage";
import ReactPaginate from 'react-paginate';
import BookingPageCardDetail from "./components/BookingPage/BookingPageCardDetail";

const App = () => {

  return (
    // <div>
    //   <Home />
    // </div>

    <Router>

      <>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/bookingpage/:id" element={<BookingPageCardDetail />} />
            <Route path="/bookingpage/bookinginfo/bookingdecisionpage" element={<BookingDecisionPage />} />
            <Route path="/bookinginfo" element={<BookingInfo />} />
          </Routes>
        </Layout>
      </>
    </Router>

  );
}

export default App; 