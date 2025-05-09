import { Carousel } from 'react-bootstrap';
import './imagecarousel.css'

const ImageCarousel = () => {
    return (
        <div className="carousel-container"> 
            <Carousel>
                <Carousel.Item>
                    <img
                    className="image-wrapper"
                    src="https://res.cloudinary.com/dgjubrqwc/image/upload/v1746776420/Descubre-los-elementos-esenciales-de-una-vajilla-completa_5_ft2rwh.png"
                    alt="Primera imagen"
                    />
                    <Carousel.Caption>
                        <h3>Vajillas</h3>
                        <p>Juegos de vajillas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="image-wrapper"
                    src="https://res.cloudinary.com/dgjubrqwc/image/upload/v1746776419/53bce1da-ced8-43bd-b55d-e74a0f8dffc2_16-9-discover-aspect-ratio_default_1010699_bbfngk.jpg"
                    alt="Segunda imagen"
                    />
                    <Carousel.Caption>
                        <h3>Copas y Vasos</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="image-wrapper"
                    src="https://res.cloudinary.com/dgjubrqwc/image/upload/v1746776421/How_to_create_a_spa_like_home_sovkf0.png"
                    alt="Tercera imagen"
                    />
                    <Carousel.Caption>
                        <h3>Baño</h3>
                        <p>Todo lo ideal para tu baño</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default ImageCarousel;
