
import { Route, Routes } from "react-router-dom";
import MyHome from "../../pages/myHomePage/MyHome";
import MyNavBar from "../myNavBarSec/MyNavBar";
import { useState } from "react";
import MyFooter from "../myFooterSec/MyFooter";
import InsightsPage from "../../pages/myInsightsPage/InsightsPage";
import ServicesPage from "../../pages/myServicesPage/ServicesPage";
import MyNewsLetter from "../myNewsLetterSec/MyNewsLetter";

export default function MyLayout() {
    const [scrollToggle, setScrollToggle] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setScrollToggle(true);
        } else {
            setScrollToggle(false);
        }
    });

    return (
        <>
            <MyNavBar scrollToggle={scrollToggle} />
                <Routes>
                    <Route path='/' element={<MyHome />} />
                    <Route path='/insights' element={<InsightsPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                </Routes>
            <MyNewsLetter />
            <MyFooter />
        </>
    )
}
