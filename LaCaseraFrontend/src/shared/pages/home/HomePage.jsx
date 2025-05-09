
import "./home.css";
import ImageCarousel from "../../components/carousel/ImageCarousel";

export const Home =()=> {

    return (
    <>
        <section>
            <div className="jumbotron jumbotron-fluid"/>
                <div className="container">
                    <h1 className="display-3">Menaje y Decoración</h1>
                    <p className="fs-3">Slogan</p>
            </div>
        </section>
        <section>
        <ImageCarousel/>
        </section>

</>
    )}  ;


export default Home;