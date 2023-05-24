import Button from "./elements/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
    return (
        <div className="banner max-h-75vh w-full md:w-2/3 px-1 mx-auto relative flex items-center justifyContent-center">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Be Comfortable, Be Confident
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Buy your favorite SNEEKERS Today!
                </p>
                <div className="btn-container">
                    <Button>Buy Now</Button>
                    <a href="/Products" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        All Products
                    </a>
                </div>
            </div>
            <div className="banner-image w-3/2 md:w-1/2 p-6 flex justify-end">
           

    <Carousel autoPlay infiniteLoop interval={2500}  showThumbs={false} showArrows={false} showStatus={false} stopOnHover={true}>
      <div>
        <img
          src={require("../assets/images/shoe.png")}
          alt="Image 1"
          className="max-h-150"
        />
      </div>
      <div>
        <img
          src={require("../assets/images/shoe2.png")}
          alt="Image 2"
          className="max-h-150"
        />
      </div>
      <div>
        <img
          src={require("../assets/images/shoe3.png")}
          alt="Image 3"
          className="max-h-150"
        />
      </div>
      <div>
        <img
          src={require("../assets/images/shoe4.png")}
          alt="Image 4"
          className="max-h-150"
        />
      </div>
    </Carousel>
            </div>
        </div>
    )
}