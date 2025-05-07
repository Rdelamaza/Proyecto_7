
import './App.css'
import Footer from './shared/components/footer/Footer';
import WhatsAppButton from './shared/components/buttons/WhatsAppButton/WhatsAppButton';
import { AppRouter } from './router/AppRouter/AppRouter';
import { AuthGlobalState } from './modules/auth/context/AuthGlobalState';



export const App =  () => {

  return (
    <AuthGlobalState>
        <AppRouter/>
        <WhatsAppButton
        phoneNumber='+56987654321'
        message='¡Hola! Estoy interesado en más información.' />
        <Footer/> 
    </AuthGlobalState>


  
  )
}

export default App
