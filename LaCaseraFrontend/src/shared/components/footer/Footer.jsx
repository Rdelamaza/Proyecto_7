import react from "react";
import "./footer.css";




export const Footer =()=>{
    return (

        <>
        <footer className="container-fluid bg-grey">
            <div className="container">

                <div className="row">
        
                    <div className="col-md-4 mb-4">
                        <h5>La Cacera</h5>
                        <p>Menaje y decoracion</p>
                    </div>
        

                    <div className="col-md-4 mb-4">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#inicio" className="text-black">Inicio</a></li>
                            <li><a href="#productos" className="text-black">Tienda Online</a></li>
                            <li><a href="#nosotros" className="text-black">Nuestro Equipo</a></li>
                            <li><a href="#contacto" className="text-black">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5>Síguenos</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="me-3"><a href="#" className="text-black"><i className="bi bi-facebook"></i></a></li>
                            <li className="me-3"><a href="#" className="text-black"><i className="bi bi-instagram"></i></a></li>
                            <li className="me-3"><a href="#" className="text-black"><i className="bi bi-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                

                <hr className="bg-black"/>
        

                <div className="text-center">
                    <p>&copy; 2025 La Casera. Todos los derechos reservados.(Raimundo De La Maza)</p>
                </div>
            </div>
        </footer>

    
        </>





    )
    
}

export default Footer;