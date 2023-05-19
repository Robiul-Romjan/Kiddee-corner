import Banner from "../Banner/Banner";
import Exclusive from "../Exclusive/Exclusive";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <Exclusive />
        </div>
    );
};

export default Home;