
import './App.css'
import Footer from './shared/components/footer/Footer';
import WhatsAppButton from './shared/components/buttons/WhatsAppButton/WhatsAppButton';
import { AppRouter } from './router/AppRouter/AppRouter';
import { AuthProvider } from './modules/auth/context/AuthGlobalState';



export const App =  () => {

  return (
    <AuthProvider>
        <AppRouter/>
        <WhatsAppButton
        phoneNumber='+56987654321'
        message='¡Hola! Estoy interesado en más información.' />
        <Footer/> 
    </AuthProvider>

  )
}

export default App
