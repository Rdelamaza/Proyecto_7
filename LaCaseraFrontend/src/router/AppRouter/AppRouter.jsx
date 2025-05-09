import { Route, Routes } from 'react-router-dom';
import  HomePage  from '../../shared/pages/home/HomePage';
import  AboutPage  from '../../shared/pages/about/AboutPage';
import  NavBar  from '../../shared/components/NavBar/NavBar';
import ContactPage from '../../shared/pages/contact/ContactPage';
import MenajePage from '../../modules/products/pages/Menaje/MenajePage';
import { LoginPage } from '../../modules/auth/pages/LoginPage/Login';
import CartPage from '../../modules/cart/pages/CartPage/CartPage'
import { RegisterPage } from '../../modules/auth/pages/RegisterPage/Register';
import { MercadoPagoStatus } from '../../modules/payments/components/MercadoPagoStatus';

export const AppRouter = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/menaje" element={<MenajePage/>}/>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/mercadopago/status" element= {<MercadoPagoStatus/>}/>
                {/*

                <Route path="/manteleria" element={<ManteleriaPage/>}/>
                <Route path="/quincho" element={<QuinchoPage/>}/>
                <Route path="/bano" element={<BanoPage/>}/>
                <Route path="/dormitorio" element={<DormitorioPage/>}/>
                <Route path="/terraza" element={<TerrazaPage/>}/>
                <Route path="/entrada" element={<EntradaPage/>}/>
                <Route path="/deco1" element={<Deco1Page/>}/>
                <Route path="/deco2" element={<Deco2Page/>}/>
                <Route path="/deco3" element={<Deco3Page/>}/>
                
                
                */}

            </Routes>


        
        </>


    );
}

export default AppRouter;