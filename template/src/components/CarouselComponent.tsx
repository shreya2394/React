import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../index.css";

const CarouselComponent = () => {
  return (

    <div className="w-full h-96 mt-20 pl-10 pr-10 relative">
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status bar
        showArrows={true} // Show navigation arrows
        infiniteLoop={true} // Infinite loop
        autoPlay={true} // Auto-play
        interval={5000} // Auto-play interval in milliseconds
      >
        <div>
          <img
            src="https://images.pexels.com/photos/15703290/pexels-photo-15703290/free-photo-of-a-plate-on-a-table.jpeg"
            alt="Image 1" className="w-full h-96 object-contain" />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5864510/pexels-photo-5864510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 2" className="w-full h-96 object-contain" />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/11213783/pexels-photo-11213783.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="Image 3" className="w-full h-96 object-contain" />
        </div>
        {/* Add more carousel items here */}
      </Carousel>
    </div>


  );
};

export default CarouselComponent;