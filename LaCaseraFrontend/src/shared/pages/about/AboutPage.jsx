import React from "react";
import "./about.css";
import Card from 'react-bootstrap/Card'

export const About =() => {

    return (
    <>
        <div className="card-container-centered">
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Sobre Nosotras</Card.Title>
                    <Card.Text>
                    Somos madre e hija emprendedoras. Buscamos los mejores diseños y combinaciones para vestir tu mesa.
                    </Card.Text>
                    <Card.Text>
                    L@s asesoramos y ayudamos a encontrar todo lo necesario para que te luzcas.
                    </Card.Text>
                    <Card.Text>
                    Lo importante es crear un espacio único y cálido para compartir.
                    </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
    </>
);
}



export default About