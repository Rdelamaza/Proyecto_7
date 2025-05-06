import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer';
import WhatsAppButton from './shared/components/buttons/WhatsAppButton/WhatsAppButton';
import { AppRouter } from './router/AppRouter/AppRouter';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRouter/>
    <WhatsAppButton
    phoneNumber='+56987654321'
    message='¡Hola! Estoy interesado en más información.' />
    <Footer/>


    </>
  )
}

export default App
