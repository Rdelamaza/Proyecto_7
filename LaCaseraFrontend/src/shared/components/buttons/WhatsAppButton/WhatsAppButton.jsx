
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloatButton.css';

const WhatsAppFloatButton = ({ phoneNumber = '', message = '', bottom = '30px', right = '30px' }) => {
if (!phoneNumber) {
    console.error("WhatsAppButton: phoneNumber es requerido");
    return null;
} 

const formattedPhone = phoneNumber.replace(/[^\d]/g, '');
const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

return (
    <div className="whatsapp-float-container" style={{ bottom, right }}>
        <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="whatsapp-tooltip">¡Contáctanos por WhatsApp!</Tooltip>}
    >
    <Button 
        variant="success" 
        className="whatsapp-float-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
            aria-label="Chat por WhatsApp"
        >
    <FaWhatsapp size={24} />
    </Button>
    </OverlayTrigger>
    </div>
);
};

export default WhatsAppFloatButton;