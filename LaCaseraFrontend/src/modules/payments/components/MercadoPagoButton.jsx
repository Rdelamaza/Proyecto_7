import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';
import { mercadoPagoPreference } from '../services/paymentService';

import { env } from "../../../config/env.config";

const { mp_publicKey, optionsCurrency: { locale } } = env

export const MercadoPagoButton = ({ cart, onPaymentSuccess }) => {
    const [ preferenceId, setPreferenceId ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        initMercadoPago(mp_publicKey, { locale });
    }, [])

    const handleGeneratePreference = async() => {
        setLoading(true);
        try {
            const { data } = await  mercadoPagoPreference({ cart });
            setPreferenceId(data.id)
        } catch (error) {
            console.error('Error al procesar el pago', error);
        } finally {
            setLoading(false);
        }
    };

return (
        <div className="d-flex flex-column align-items-center gap-3">
            <button
                onClick={handleGeneratePreference}
                className={`btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center ${
                    loading ? "opacity-75" : ""
                }`}
                disabled={loading}
            >
                {loading ? (
                    <>
                        <span 
                            className="spinner-border spinner-border-sm me-2" 
                            role="status" 
                            aria-hidden="true"
                        ></span>
                        Cargando pasarela de pago...
                    </>
                ) : (
                    <>
                        <img 
                            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadopago/logo__small@2x.png" 
                            alt="Mercado Pago" 
                            className="me-2" 
                            style={{ height: '20px' }}
                        />
                        Pagar con Mercado Pago
                    </>
                )}
            </button>

            {preferenceId && (
                <div className="w-100 mt-3">
                    <Wallet 
                        initialization={{ preferenceId }}
                        onReady={() => console.log('Mercado Pago Wallet esta listo')}
                        onError={(error) => console.error('Error en la pasarela de pago', error)}
                        onPayment={(details) => onPaymentSuccess(details)}
                    />      
                </div>
            )}
        </div>
    );

};