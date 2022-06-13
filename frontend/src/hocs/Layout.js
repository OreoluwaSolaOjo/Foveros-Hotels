import { connect } from "react-redux";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { checkAuthenticated, load_user } from "../redux/actions";
import { useEffect } from "react";

const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, [])
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
}

export default connect(null, { checkAuthenticated, load_user })(Layout); 