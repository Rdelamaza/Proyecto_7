import { Link, useLocation } from "react-router-dom"

import { message } from "../utils/message"
import { statusStyles } from "../utils/stylesFormat"



export const MercadoPagoStatus = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');

    const { title, description } = message[status] || message.default

    const bootstrapStatusStyles = {
        approved: 'bg-success bg-opacity-10 border-start border-success border-5 text-success',
        failure: 'bg-danger bg-opacity-10 border-start border-danger border-5 text-danger',
        pending: 'bg-info bg-opacity-10 border-start border-info border-5 text-info',
        default: 'bg-secondary bg-opacity-10 border-start border-secondary border-5 text-secondary'
    };

    return (
        <div className={`container mt-5 p-4 rounded ${bootstrapStatusStyles[status] || bootstrapStatusStyles.default}`}>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="h2 fw-bold mb-3">{title}</h2>
                    <p className="text-muted mb-4">{description}</p>
                    <Link
                        to={'/'}
                        className="btn btn-primary px-4 py-2"
                    >
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        </div>
    );
};