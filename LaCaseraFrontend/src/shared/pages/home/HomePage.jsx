
import "./home.css";
import ImageCarousel from "../../components/carousel/ImageCarousel";

export const Home =()=> {

    return (
    <>
        <section>
            <div className="jumbotron jumbotron-fluid"/>
                <div className="container">
                    <h1 className="display-2 mb-3">Menaje y Decoración</h1>
            </div>
        </section>
        <section>
        <ImageCarousel/>
        </section>

        <section>
            ¿Productos?
        </section>

</>
    )}  ;


export default Home;