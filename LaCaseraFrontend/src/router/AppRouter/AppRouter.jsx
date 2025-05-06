import { Route, Routes } from 'react-router-dom';
import  HomePage  from '../../shared/pages/home/HomePage';
import  AboutPage  from '../../shared/pages/about/AboutPage';
import  NavBar  from '../../shared/components/navbar/NavBar';
import ContactPage from '../../shared/pages/contact/ContactPage';
import MenajePage from '../../modules/products/pages/MenajePage';

export const AppRouter = () => {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/menaje" element={<MenajePage/>}/>
        </Routes>


        
        </>


    );
}

export default AppRouter;