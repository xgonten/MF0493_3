import 'animate.css';
import { useSlides } from "../Hooks/useSlides";
import "../css/Slideshow.css"
import { Link } from 'react-router-dom';

function Slideshow() {
   
   const banner = useSlides()
    
    return (
        <Link to={'/'}>
        <div ref={banner} className="banner">
            <div className="mySlides fade">
                <img src="https://i.pinimg.com/564x/65/b8/30/65b83066e590a96fbf83aa50fcc8a978.jpg" style={{ width: "100%" }}/>
            </div>
            <div className="mySlides fade">
                <img src="https://i.pinimg.com/564x/85/9d/a1/859da15f21fac4e0bdb62b98714a3e1d.jpg" style={{ width: "100%" }}/>
            </div>
            <div className="mySlides fade">
                <img src="https://i.pinimg.com/564x/de/bf/17/debf17fe0a70408dfbffd715e67e41bd.jpg" style={{ width: "100%" }}/>
            </div>
        </div>
        </Link>
    );
}

export default Slideshow;
