
export const message = {
    approved: {
        title: '💸 Pago éxito! 💸',
        description: 'Tu pago ha sido procesado con éxito. Gracias por tu compra!',
        status: 'approved'
    },
    failure: {
        title: '🚫 Pago Fallido! 🚫',
        description: 'Lo sentimos, Tu pago no ha podido ser procesado. Por favor, intenta nuevamente mas tarde.',
        status: 'failure'
    },
    pending: {
        title: '⏳ Pago Pendiente! ⏳',
        description: 'Tu pago está pendiente de confirmación. Te notificaremos cuando se complete el proceso.',
        status: 'pending'
    },
    default: {
        title: ' Estado Desconocido ',
        description: 'El estado de tu pago es desconocido. Por favor, verifica tu cuenta de Mercado Pago para más detalles.',
        status: 'default'
    }
}