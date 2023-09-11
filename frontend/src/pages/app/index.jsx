
import Footer from "../../components/footer";

import TopNavbar from "../../components/top-navbar";

import MainNavbar from "../../components/main-navbar"

import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <TopNavbar/>
            <MainNavbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App;